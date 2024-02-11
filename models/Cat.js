class Cat {
    static _tableName = 'cats';
    static _client;

    static async create(bodyObj) {
        const {name, breed, color, age, weight, favorite} = bodyObj;
        const insertString = `INSERT INTO ${this._tableName} (name, breed, color, age, weight, favorite) VALUES ('${name}', '${breed}', '${color}', ${age},  ${weight}, '${favorite}') RETURNING *;`
        const {rows} = await this._client.query(insertString);
        return rows;
    };

    static async findAll() {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}`);
        return rows;
    };

    static async findByPk(id) {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}  WHERE id = ${id}`);
        return rows;
    };

    static async updateByPk() {};

    static async deleteByPk(id) {
        const {rows} = await this._client.query(`DELETE FROM ${this._tableName} WHERE id = ${id} RETURNING *`)
        return rows;
    }
}

module.exports = Cat;