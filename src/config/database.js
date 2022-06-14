module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sistema-agendamento',
    define: {
        timestamps: true,
        undercored: true,
        undercoredAll: true,
    }
}