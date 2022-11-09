
class Repository {
    constructor (model) {
        this.model = model
    }

    async list() {
        this.model.getAll()
    }

    
    async findOne() {

    }

    
    async Delete() {

    }


    async Create() {

    }
}

export default Repository