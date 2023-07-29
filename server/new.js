const sqlite = require( 'sqlite3');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host:'localhost',
//     user: 'random',
// })

const db = new sqlite.Database('db/EPMS.sqlite3')
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
    // db.run(`DELETE FROM teachers WHERE teacherName = ?`,'ramesh',err => {if(err) console.log('An error occurred at line 29', err);})

    // db.get(`SELECT * FROM teachers`, ( err, row ) =>{
    //     console.log( row );
    // })

    // db.run(`ALTER TABLE teachers
    // ADD password VARCHAR(255)`, err => console.log('An error occurred', err))


    // db.run(`INSERT INTO teachers VALUES ( ?, ?, ?)`,
    // ['', 'ramesh' , 'halleluja'])

    // db.run(`DELETE FROM person WHERE fullName= ?`,'random',( err ) =>{
    //     if ( err ) console.log( err )
    // })

    
    // db.run(`ALTER TABLE person
    //  ADD password VARCHAR(255)`,err => console.log('An error occurred', err ))
    // //  ADD teachingExperience  INTEGER(255)`, err => console.log('An error occurred', err ))
    
    db.run(`UPDATE person
    SET password = 'random'
    WHERE email ='random@gmail.com'`, err => {if ( err) console.log( 'An error occurred',err)});
    
    db.all(`SELECT * FROM person`, ( err, rows )=>{
        rows.forEach(row => console.log( row ))
    })
}

catch( err ) {
    console.log('An error occurred', err)
}