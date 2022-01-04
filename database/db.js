import data from './data'

class db{
    constructor(){}

    async getAll() {
        const allData = Object.values(data)
        return allData
    }

    async getById(id) {
        if (!Object.prototype.hasOwnProperty.call(data, id)) {
            return null
        }

        const entry = data[id]
        return entry
    }
}

export default db