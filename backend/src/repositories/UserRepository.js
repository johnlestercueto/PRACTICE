const BaseRepository = require('./BaseRepository');
const UserModel = require('../models/user');

class UserRepository extends BaseRepository {
    constructor() {
        super(UserModel);
    }

    async findByEmail(email) {
        return this.findOne({ email })
    }
 }

 module.exports = new UserRepository();