// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table (DATA)
// =============================================================

var tables = [
    {
      name: 'Mr. Bill',
      phone: '555-5555',
      email: 'mrbill@snl.com',
      id: 'BillyBoy'
    },
    {
      name: 'Sluggo',
      phone: '666-6666',
      email: 'sluggo@snl.com',
      id: 'GonnaGitBill'
    },
    {
      name: 'Landshark',
      phone: '777-7777',
      email: 'landshark@snl.com',
      id: 'ImADolphin'
    },
    {
      name: 'Toonces',
      phone: '888-8888',
      email: 'toonces@snl.com',
      id: 'IDriveGood'
    },
    {
      name: 'Debbie Downer',
      phone: '999-9999',
      email: 'ddowner@snl.com',
      id: 'LifeIsBad'
    }
];


// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  