const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000;

app.use(cors());
app.listen(port, () =>{
    console.log(`app listening at https://localhost:${port}`)
});