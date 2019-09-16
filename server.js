const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
require('dotenv').config();

console.log('process.env.MONGO_URI', process.env.MONG0_URI);

mongoose.connect(process.env.MONG0_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});