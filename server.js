const express = require("express");
const connection = require("./config");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/alienbabes', async(req, res) => {
    try {
        const getAllAlienbabesQuery = 'SELECT * FROM alienbabes';
        const result = await connection.query(getAllAlienbabesQuery);
        res.json(result);
        console.log(result);
    } catch (error) {
        res.status(400).json(e);
    }
});


app.listen(PORT, () => console.log(`Alien Babe Server listening on PORT: ${PORT}`));