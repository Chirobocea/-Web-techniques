var exp = require('express');
app = exp();


app.get('/', function (req, res) {
    const cities = [
        {
            nume: "Aa",
            populatie: 14000,
            capitala: true
        },
        {
            nume: "Bb",
            populatie: 7000,
            capitala: false
        },
        {
            nume: "Cc",
            populatie: 19000,
            capitala: false
        },
        {
            nume: "Dd",
            populatie: 5000,
            capitala: false
        },
        {
            nume: "Ee",
            populatie: 8000,
            capitala: true
        },
        {
            nume: "Ff",
            populatie: 12000,
            capitala: false
        },
        {
            nume: "Gg",
            populatie: 20000,
            capitala: true
        }
    ]

    for (c of cities) {
        if (req.query.select = "mic") {
            if (c.populatie < 10000) {
                if (req.query.capitala == "nu" && c.capitala == false) {
                    res.write(c.nume)
                    res.write(" nu este capitala")
                    res.write(" si este oras mic")
                    res.write("\n")
                }
                else if (req.query.capitala == "da" && c.capitala == true) {
                    res.write(c.nume)
                    res.write(" este capitala")
                    res.write(" si este oras mic")
                    res.write("\n")
                }
            }
        }
        else {
            if (c.populatie > 10000) {
                if (req.query.capitala == "nu" && c.capitala == false) {
                    res.write(c.nume)
                    res.write(" nu este capitala")
                    res.write(" si este oras mare")
                    res.write("\n")
                }
                else if (req.query.capitala == "da" && c.capitala == true) {
                    res.write(c.nume)
                    res.write(" este capitala")
                    res.write(" si este oras mare")
                    res.write("\n")
                }
            }
        }

    }

    res.end();
})

app.listen(7000, function () { console.log("ascult la 7000") });