const sqlite = require( 'sqlite3');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host:'localhost',
//     user: 'random',
// })

const db = new sqlite.Database('random.sqlite3')
try{

    console.log('Connection esablished')

    // const createNewTeacherTable = `CREATE TABLE IF NOT EXISTS teachers
    // (id INT AUTO_INCREMENT PRIMARY_KEY,
    // teacherName VARCHAR(255))`

    // db.run(createNewTeacherTable, ( err, result ) =>{
    //     if ( err ) throw err;
    //     console.log('Teachers table created ')
    // })

    // const addRandomData = `INSERT INTO teachers
    // VALUES ('','random')`
    // db.run( addRandomData,( err ) =>{
    //     if ( err ) throw err;
    //     console.log( 'Item stored ')
    // } )

    db.get(`SELECT * FROM teachers`, ( err, row ) =>{
        console.log( row );
    })

}

catch( err ) {
    console.log('An error occurred', err)
}