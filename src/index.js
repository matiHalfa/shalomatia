const express = require('express');
const server = express();

server.use((req, res) => {
    res.send('Shalom Mati!')
})


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + PORT)
});
