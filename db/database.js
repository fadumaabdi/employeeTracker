const mysql = require('mysql2')

class database{
    constructor (option) {
        this.options = this.options
        this.db = null
    }

    validate (){

        const { host, user,password,database} = this.options;
        if (!host || !user || !password || !database)
        throw new Error('Database configuration Invalid');
        return;
    }

    connect () {

        //validation
        this.validate ();
        //destructure
        const { host,user,password,database} = this.options;
        //connect
        this.db = mysql.createConnection(
            {
                host: host,
                user: user,
                password: password,
                database: database
            },
            console.log('Successfully connected to Employee Database')
        );
    }
    disconnect (){
        this.db.disconnect();
    }
}

module.exports = database;