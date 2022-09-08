const userSchema = require('./schema/user.graphql')
const userResolvers = require('./resolvers/resolver')
const UsersAPI = require('./datasource/user')

module.exports = {
    userSchema,
    userResolvers,
    UsersAPI
}