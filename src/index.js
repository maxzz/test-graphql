const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

let highlights = [
    {
        id: '1',
        content: 'One day I will find the right words, and they will be simple.',
        title: 'Dharma Bums',
        author: 'Jack Kerouac'
    },
    {
        id: '2',
        content: 'In the limits of a situation there is humor, there is grace, and everything else.',
        title: 'Arbitrary Stupid Goal',
        author: 'Tamara Shopsin'
    }
];

const resolvers = {
    Query: {
        highlights: () => highlights,
        highlight: (parent, args) => {
            return highlights.find((item) => item.id === args.id);
        }
    },
    Mutation: {
        newHighlight: (parent, args) => {
            const h = {
                id: String(highlights.length + 1),
                content: args.content,
                title: args.title || '',
                author: args.author || ''
            };
            highlights.push(h);
            return h;
        },
        updateHighlight: (parent, args) => {
            const h = highlights.find(item => item.id === args.id);
            h.content = args.content;
            return h;
        },
        deleteHighlight: (parent, args) => {
            const h = highlights.find(item => item.id === args.id);
            highlights = highlights.filter(item => item.id !== args.id);
            return h;
            
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Highlights server ready ar ${url}`);
});

console.log('started');
