import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
    Post: {
        author: async (post) => await User.findById(post.author) 
    },
    Query: {
        posts: async () => await Post.find(),
        post: async (_, { id }) => await Post.findById(id)
    },
    Mutation: {
        createPost: async (_, { data }) => await Post.create(data),
        updatePost: async (_, { id, data }) => await Post.findByIdAndUpdate(id, data, { new: true}), // new para retornar os dados atualizados
        deletePost: async (_, { id}) => !!(await Post.findByIdAndDelete(id))
    }
};
