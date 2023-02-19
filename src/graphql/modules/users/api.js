import User from '../../../models/User';

module.exports = {
    async getUsers() {
        return await User.find();
    },
    async getUser(id) {
        return await User.findById(id);
    },
    async createUser(data) {
        return await User.create(data);
    },
    async updateUser(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true}); // new para retornar os dados atualizados
    },
    async deleteUser(id) {
        return !!(await User.findByIdAndDelete(id));
    }
}