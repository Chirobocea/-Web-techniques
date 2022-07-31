var exp = require('express');
app = exp();


app.get('/', function (req, res) {
    var mesaj = [];
    var zboruri = [
        {
            from: "bucharest",
            to: "marseille",
            date_s: "2022-09-17",
            tip: "economic"
        }
    ]

    for (z of zboruri) {
        if(req.query.directie == "dus"){
            if(req.query.tip == z.tip){
                if(req.query.from == z.from){
                    if(req.query.to == z.to){
                        mesaj.push("zborul a fost gasit");
                    }
                }
            }
        }
    }
    for(i=0; i<mesaj.length; i++)
        res.write(mesaj[i]+" ")
    res.end();


})

app.listen(7000, function () { console.log("ascult la 7000") });