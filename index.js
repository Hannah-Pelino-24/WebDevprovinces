const path = require('path')
const express = require('express')
const app = express()
const fs = require('fs')


app.set('view engine', 'pug')

app.use("/assets", express.static(path.join(__dirname, 'assets')));

app.get('/provinces/:provinceName', (req, res) => {
    var pingCount = "";
    fs.readFile('./views/' + req.params.provinceName + '.json', (err, data) => {
        if (err) throw err;
        var province = JSON.parse(data);
        res.render('index', province)
    });
    fs.readFile('number_Of_Requests.txt', (err, data ) =>{
        if (err) throw err;
        pingCount=(data)*1
        pingCount++
        fs.writeFile('number_Of_Requests.txt', pingCount++, 'utf8', (e) =>{
            console.log('Counted..')
        });

    })
})
app.get('*',(req,res)=>{
    req.on('data',(data)=>{
        console.log(data)

    })
})
app.listen(8080, function () {
    console.log('Server running...')
})