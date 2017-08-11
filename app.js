var app = require('./config/server');
var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require ('./app/routes/noticias')(app);

app.listen(3000, () => {
    console.log("Server ON");
})