import { Sequelize } from "sequelize";

const db = new Sequelize('notes-arif','root','', {
    host:'34.128.89.90',
    dialect:'mysql'
})

export default db;