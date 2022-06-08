const { Book, User} = require("../models");

const resolvers = {
    Query:{
        getSingleUser: async (parent, { username }) => {
            return await User.findById({ _id: username }).populate('routes')
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, args)=>{
            return User.findByIdAndUpdate(
                args._id,
                {$addToSet:{ savedBooks: args.bookId}},
                {new: true}
                )
        },
        deleteBook: (parent, args)=>{
            return await User.findOneAndUpdate(
                {_id: args._id},
                {$pull: {savedBooks: args.bookId}},
                {new: true}
                )
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
              throw new AuthenticationError('No profile with this username found!');
            }
        }
    }
}