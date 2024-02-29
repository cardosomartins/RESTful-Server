const NeDB = require('nedb');

let db = new NeDB({
    filename:'users.db',
    autoload:true
})

module.exports = (app) => {

    app.get('/', (req, res) => res.send("HEy mothafucka"));
    app.get('/ameba', (req, res) => res.send("Hey amebafucka"));
    app.post('/postTest', (req, res) => {
        db.insert(req.body, (err) => {
            if(err) return console.log(err);

            console.log("User has been successfully added!");
        })
        res.send(`Hey amebafucka: ${JSON.stringify(db.loadDatabase)}`);
    });


}