import api from './api';

export default {
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`
    },
    Query: {
        users: () => api.getUsers(),
        user: (_, { id }) => api.getUser(id)
    },
    Mutation: {
        createUser: (_, { data }) => api.createUser(data),
        updateUser: (_, { id, data }) => api.updateUser(id, data),
        deleteUser: (_, { id }) => api.deleteUser(id)
    }
};
