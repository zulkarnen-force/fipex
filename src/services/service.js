import Repository from "../repositories/repository.js"

class Service {
    constructor(repo = Repository) {
        this.repo =repo
    }

    async getAll() {
        try {
            return await this.repo.list()
        } catch (err) {
            throw err
        }
    }

    async create(data) {
        try {
            return await this.repo.create(data)
        } catch (err) {
            throw err
        }
    }


    async getById(id) {
        try {
            return await this.repo.findById(id)
        } catch (err) {
            throw err
        }
    }


    async getByQuery(query) {
        try {
            return await this.repo.findOne(query)
        } catch (err) {
            throw err
        }
    }
}

export default Service