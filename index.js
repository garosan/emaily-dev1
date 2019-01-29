const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'There'});
});


// Dynamic port binding for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);