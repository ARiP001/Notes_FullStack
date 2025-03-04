import { Sequelize } from "sequelize";

const db = new Sequelize('notes_arif','root','', {
    host:'34.46.79.48',
    dialect:'mysql'
})

export default db;