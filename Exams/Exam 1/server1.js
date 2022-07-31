var exp = require('express');
app = exp();


app.get('/', function (req, res) {

  const people = [
    {
      nume: "Ion",
      sex: "m",
      varsta: 3
    },
    {
      nume: "Oana",
      sex: "f",
      varsta: 23
    },
    {
      nume: "Daria",
      sex: "f",
      varsta: 10
    },
    {
      nume: "Mihai",
      sex: "m",
      varsta: 19
    },
    {
      nume: "Gabriel",
      sex: "m",
      varsta: 22
    },
    {
      nume: "Simona",
      sex: "f",
      varsta: 11
    },
    {
      nume: "Bogdan",
      sex: "m",
      varsta: 28
    }
  ]

  ok = 0;
  var date = [];
  for (p of people) {
    if (req.query.nume == p.nume) {
      ok = 1;
      date.push(p.nume);
      if (p.varsta >= 18)
        date.push("Major");
      else date.push("Minor");
      date.push(p.sex);
    }
  }

  if (ok)
    res.write("Numele este: " + date[0] + " si este " + date[1] + " si are sexul " + date[2])
  else
    res.write("Nu am gasit nimic in lista")
  res.end();
})

app.listen(7000, function () { console.log("ascult la 7000") });