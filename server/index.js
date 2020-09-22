const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type SuperHero {
    name: String
    power: String
    details: Details
  }

  type Details {
    universe: String
    photo: String
  }

  type Query {
    superHeros: [SuperHero!]!
  }
`;

const resolvers = {
  Query: {
    superHeros: () => superHeros
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const superHeros = [
    {
        name: "Batman",
        power: "Money",
        details: {
            universe: "DC",
            photo: "https://i1.pngguru.com/preview/304/230/397/batman-png-clipart.jpg"
        }
    },
    {
        name: "SpiderMan",
        power: "Spider web",
        details: {
            universe: "Marvel",
            photo: "https://p7.hiclipart.com/preview/557/542/447/ultimate-spider-man-marvel-comics-comic-book-spiderman.jpg"
        }
    },
    {
        name: "Hulk",
        power: "Strength",
        details: {
            universe: "Marvel",
            photo: "https://toppng.com/uploads/preview/hulk-11550724609yicgftoppc.png"
        }
    },
]
