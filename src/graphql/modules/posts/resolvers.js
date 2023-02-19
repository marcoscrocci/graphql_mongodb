import api from './api'; 

export default {
    Post: {
        author: (post) => api.getUser(post.author)
    },
    Query: {
        posts: () => api.getPosts(),
        post: (_, { id }) => api.getPost(id)
    },
    Mutation: {
        createPost: (_, { data }) => api.createPost(data),
        updatePost: (_, { id, data }) => api.updatePost(id, data),
        deletePost: (_, { id}) => api.deletePost(id)
    }
};
