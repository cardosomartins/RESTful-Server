module.exports = (app) => {

const get = (req, res) => {
    const users = [
        {
            "id": 1,
            "name": "teste1"
        },

        {
            "id": 2,
            "name": "teste2"
        },        
    ]

    return res.json(users);
}
}