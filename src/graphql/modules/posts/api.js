import Post from '../../../models/Post';
import User from '../../../models/User';

module.exports = {
    async getPosts() {
        return await Post.find();
    },
    async getPost(id) {
        return await Post.findById(id);
    },
    async getUser(id) {
        return await User.findById(id);
    },    
    async createPost(data) {
        return await Post.create(data);
    },
    async updatePost(id, data) {
        return await Post.findByIdAndUpdate(id, data, { new: true}); // new para retornar os dados atualizados
    },
    async deletePost(id) {
        return !!(await Post.findByIdAndDelete(id));
    }
}