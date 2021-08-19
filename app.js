const express = require('express');
const app     = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.redirect('demo')
})

app.get('/demo', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    app.listen(process.env.PORT, process.env.IP, () => console.log('Server has started!'));
})