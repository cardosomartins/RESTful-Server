module.exports = (app) => {

    app.get('/', (req, res) => res.send("HEy mothafucka"));
    app.get('/ameba', (req, res) => res.send("Hey amebafucka"));
    app.post('/postTest', (req, res) => {
        res.send(`Hey amebafucka: ${req.body}`)
    });


}