import User from '../../../models/User';

export default {
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`
    },
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id)
    },
    Mutation: {
        createUser: async (_, { data }) => await User.create(data),
        updateUser: async (_, { id, data }) => await User.findByIdAndUpdate(id, data, { new: true}), // new para retornar os dados atualizados
        deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id))
    }
};
