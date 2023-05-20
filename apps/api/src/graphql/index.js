const {ApolloServer} = require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
const {ApolloServerPluginDrainHttpServer} = require('@apollo/server/plugin/drainHttpServer')
const {loadFiles} = require('@graphql-tools/load-files')
const { resolvers } = require('./resolver')

const http = require('http')




const useGraphql = async (app) => {
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs: await loadFiles('./src/**/*.graphql'),
        resolvers,
        plugins:[
            ApolloServerPluginDrainHttpServer({httpServer})
        ],
        introspection:true
    })
    await server.start()
    app.use('/graphql',expressMiddleware(server,{}))
    
    
}

module.exports =  useGraphql