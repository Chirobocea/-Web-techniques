var exp1 = require('express');
app1 = exp1();


var obiecte = [
    { nume: "agenda", greutate: "0.5" },
    { nume: "telefon", greutate: "1" },
    { nume: "rucsac", greutate: "2.3" },
    { nume: "caiet", greutate: "0.8" },
    { nume: "carte", greutate: "1" },
    { nume: "tobe", greutate: "4" }]

app1.get('/', function (req, res) {
    
    var ceva = [];
    var ok = 0;
    for (ob of obiecte) {
        if ((ob.greutate <= req.query.greutate) && (ob.nume.includes("t"))) { ceva.push(ob); ok = 1; }
    }
    if (ok)
        for (ob of ceva)
            res.write(ob.nume + ", ")
    else
        res.write("NU-S")
    res.end()
})

app1.listen(7000, function () { console.log("ascult la 7000") });