import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "BrianF21!",
    database: "projetopomodoro"
})

// Verificação de erro
db.connect((err) => {
    if(err){
        console.log(`Erro de conexão ao BD: ${err}`);
        return;
    }

    console.log(`Conexão bem-sucedida`)
});
