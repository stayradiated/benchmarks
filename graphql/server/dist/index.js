"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const mercurius_1 = __importDefault(require("mercurius"));
const fs = __importStar(require("fs"));
const path_1 = require("path");
const app = fastify_1.default();
const schema = fs.readFileSync(path_1.join(__dirname, '../schema.graphql'), 'utf8');
const resolvers = {
    Query: {
        viewer: async () => {
            return {
                id: 'VIEWER_ID',
            };
        },
    },
    Viewer: {
        allContacts: async () => {
            return {
                edges: [
                    {
                        node: {
                            id: 1,
                            name: 'Anne',
                            email: 'anne@example.com',
                        },
                    },
                    {
                        node: {
                            id: 2,
                            name: 'Barry',
                            email: 'barry@example.com',
                        },
                    },
                ],
            };
        },
    },
};
app.register(fastify_cors_1.default, {
    origin: true,
});
app.register(mercurius_1.default, {
    routes: true,
    graphiql: 'playground',
    jit: 1,
    schema,
    resolvers,
});
app.listen(9999);
//# sourceMappingURL=index.js.map