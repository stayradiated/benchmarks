import got from 'got'
import { CookieJar } from 'tough-cookie'

const SIGN_IN_PATH = 'users/sign_in'

interface SignInOptions {
  host: string,
  email: string,
  password: string,
}

const getCSRFToken = async (prefixUrl: string) => {
  const result = await got.get(SIGN_IN_PATH, { prefixUrl }).text()
  const matches = result.match(/<meta name="csrf-token" content="(.*)" \/>/)

  if (matches == null) {
    throw new Error('Could not find CSRF token!')
  }

  return matches[1]
}

const signIn = async (options: SignInOptions) => {
  const { host, email, password } = options

  const token = await getCSRFToken(host)

  const cookieJar = new CookieJar()

  const response = await got.post(SIGN_IN_PATH, {
    prefixUrl: host,
    form: {
      authenticity_token: token,
      'user[email]': email,
      'user[password]': password,
      remember_me: '1',
    },
    throwHttpErrors: false,
    followRedirect: false,
    cookieJar,
  })

  if (response.statusCode !== 302) {
    throw new Error(`Failed to login! Received status ${response.statusCode}`)
  }

  return { cookieJar }
}

export { signIn }
