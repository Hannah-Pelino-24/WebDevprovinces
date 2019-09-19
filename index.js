const path = require('path')
const express = require('express')
const app = express()
const fs = require('fs')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('hi')
})

app.get('/provinces/:provinceName', (req, res) => {
    fs.readFile('./views/' + res.req.params.provinceName + '.json', (err, data) => {
        if (err) throw err;
        var province = JSON.parse(data);
        body = "\nProvince Name: " + province.name + "\nProvince Group: " + province.group + "\nProvince Population: " + province.population + "\nProvince Delicacies: " + province.delicacies;
        res.render('hi',province)

        console.log(body);
    });

})

// app.get('/cebu', (req, res) => {
//     fs.readFile('./views/cebu.json', (err, data) => {
//         if (err) throw err;
//         var province = JSON.parse(data);
//         body = "\nProvince Name: "+province.name + "\nProvince Group: "+ province.group + "\nProvince Population: " + province.population + "\nProvince Delicacies: " + province.delicacies;
//         console.log(body);
//     });
// })
app.listen(8080, function () {
    console.log('Server running...')
})