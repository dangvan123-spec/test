var express = require('express');
var app = express();
app.use(express.json());
var dataAll = [{"username":"sadsdas","password":11111,"id":1},{"username":"sadsdas","password":11111,"id":2},{"username":"sadsdas","password":11111,"id":3}];


app.post("/add", (req, res) => {
    let id = dataAll.length;
    id=id+1;
    const data =   {username, password } = req.body;
    data.id = id;
    dataAll.push(data);
    res.send(`new info : ${data.username}:${data.password} \n  all data : ${JSON.stringify(dataAll)} `);
});

app.get('/getAll', function (req, res) {
    res.json({
        allData: dataAll
    });
})

app.get("/getById/:id", (req, res) => {
    const userId = req.params.id
    if (dataAll.length == 0) {
        res.json({
            msg: "no data"
        });
        return;
    }
    for (let i = 0; i < dataAll.length; i++) {
        if (userId == dataAll[i].id){
            res.json(dataAll[i]);
            break;
        }
    }
    res.json({
        msg: "no data"
    });

});
app.delete("/deleteById/:id", (req, res) => {
    const userId = req.params.id
    if (dataAll.length == 0) {
        res.json({
            msg: "no data"
        });
        return;
    }
    for (let i = 0; i < dataAll.length; i++) {
        console.log(dataAll[i].id);
        if (userId == dataAll[i].id){
            res.json("delete:"+ dataAll[i]);
            dataAll.splice(i,1);
            break;
        }
    }

});
server = app.listen(5001, function () {
})