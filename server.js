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

app.use(express.static('views'))


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

var waitlist = [
    {
      name: 'Charlie',
      phone: '000-0000',
      email: 'oh_so_charlie@snl.com',
      id: 'HugMe'
    }
];

// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "views/tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "views/reserve.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// Desplays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;
    console.log(chosen);

    for (var i=0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }
    return res.json(false);
});

// Displays all waitlisted tables
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newTable.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
    if (tables.length < 5) {
      tables.push(newTable);
      return res.json(true);
    }

    else {
      waitlist.push(newTable);
      return res.json(false);
    }
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  