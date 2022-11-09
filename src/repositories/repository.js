import User from '../entities/user.js'


class Repository {
    constructor (model = User) {
        this.model = model
    }

    async create(data) {
        try {
            await this.model.create(data)
        } catch (e) {
            throw e
        }
    }


    async list() {
        return this.model.find()
    }

    
    async findOne(query) {
        try {
            return this.model.findOne(query)
        } catch (err) {
            throw err
        }
    }

    
    async findById(id) {
        try {
            return this.model.findById(id)
        } catch (err) {
            throw err
        }
    }

    
           
    async delete(query) {
        try {
            return this.model.deleteOne(query)
        } catch (err) {
            throw err
        }
    }
    
}

export default Repository