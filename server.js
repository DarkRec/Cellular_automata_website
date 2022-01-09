const express = require("express");

//-------------------------------------------------
const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static('static'))

//-------------------------------------------------
const PORT = 8000;

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
//-------------------------------------------------
const path = require("path");

//-------------------------------------------------
const cors = require("cors");
app.use(cors());
//-------------------------------------------------
const favicon = require('serve-favicon');

app.use(favicon(path.join('static', '/favicon.ico')))
app.get('/favicon.ico', (req, res) => res.status(204));
//-------------------------------------------------
const cookieParser = require('cookie-parser')

app.use(cookieParser());
//-------------------------------------------------
const session = require('express-session')

app.use(session({
    name: 'rules_session',
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

//-------------------------------------------------
/*
const { engine } = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views',
    defaultLayout: 'main',
    extname: '.handlebars'

}));
*/
//-------------------------------------------------

const hbs = require('hbs')

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/layouts');

/*
const { engine } = require('express-handlebars');   

app.engine('handlebars', engine({
    extname: '.hbs',
    defaultLayout: "main"
}));
app.set('view engine', 'hbs');
*/

//-------------------------------------------------
const Datastore = require('nedb')

const baza = new Datastore({
    filename: 'arrays.db',
    autoload: true
});

const rules = new Datastore({
    filename: 'rules.db',
    autoload: true
});

//-------------------------------------------------

const puppeteer = require("puppeteer");

//-------------------------------------------------

/*
bodyParser = require('body-parser'),
app.use(bodyParser.urlencoded({ extended: true }));
*/


//app.use(session({ secret: 'code', cookie: { maxAge: 60000 }}));

//-------------------------------------------------

//////////    //////////    //////////
//      //    //                //
//            //                //
//    ////    //////////        //
//      //    //                //
//      //    //                //
//////////    //////////        //

//-------------------------------------------------

app.get("/", function (req, res) {
    if (req.session.rules == undefined) {
        var rules = {
            0: "false", 1: "false", 2: "true",
            3: "true", 4: "false", 5: "false",
            6: "false", 7: "false", 8: "false"
        }
        req.session.rules = rules
    }
    res.render('main', {
        home: true,
    });
})

app.get("/saved", function (req, res) {
    res.render('main', {
        saved: true,
        post: {
            author: 'Janith Kasun',
            image: 'https://picsum.photos/500/500',
            comments: []
        }
    });

    //, { layout: path.join(__dirname + '/views/main') }
    //res.sendFile(path.join(__dirname + "/static/hb.html"))
})

app.get("/game", function (req, res) {
    res.render('main', {
        home: true
    });
})

app.get("/:game", function (req, res) {
    if (req.session.rules == undefined) {
        var rules = {
            0: "false", 1: "false", 2: "true",
            3: "true", 4: "false", 5: "false",
            6: "false", 7: "false", 8: "false"
        }
        req.session.rules = rules
    }
    res.render('main', {
        home: true,
        current_game:req.params
    });
})

//-------------------------------------------------

//////////    //////////    //////////    //////////
//      //    //      //    //                //
//      //    //      //    //                //
//////////    //      //    //////////        //
//            //      //            //        //
//            //      //            //        //
//            //////////    //////////        //

//-------------------------------------------------

app.post("/save", function (req, res) {                          //save to arrays.db
    // we're using async/await - so we need an async function, that we can run
    const run = async () => {
        // open the browser and prepare a page
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
    
        // set the size of the viewport, so our screenshot will have the desired size
        await page.setViewport({
            width: 1280,
            height: 800
        })
    
        await page.goto('http://localhost:8000/'+req.body.name)
        await page.screenshot({
            path: 'static/img/saves/'+req.body.name+'.png',
            clip: {'x': 140, 'y': 51, 'width': 1000, 'height': 600}
        })
        
        // close the browser 
        await browser.close();
    };
    
    // run the async function
    run();
    
    
    baza.find({}, function (err, docs) {
        var arr = JSON.parse(JSON.stringify(docs))
        var tablica = {
            "nr": arr.length.toString(),
            "nazwa": req.body.name,
            "tablica": JSON.parse(req.body.obj)
        }
        baza.insert(tablica, function (err, newDoc) { });
    });
})

app.post("/load_arrays", function (req, res) {                 //load arrays from arrays.db
    baza.find({}, function (err, docs) {
        res.send(JSON.parse(JSON.stringify(docs)))
    });
})


app.post("/load", function (req, res) {                             //load from arrays.db by name
    baza.find({ "nazwa": req.body.type }, function (err, docs) {
        res.send(JSON.parse(JSON.stringify(docs))[0].tablica)
    });
})


app.post("/rulesupdate", function (req, res) {      //on change neighborly rules

    if (req.body.checked == 'true') {
        req.session.rules[req.body.nr] = 'true'
    }
    else {
        req.session.rules[req.body.nr] = 'false'
    }

    req.session.save(function (err) {
    })
    res.send(req.session.rules)
})

app.post("/rulesloadtocheckbox", function (req, res) {      //working on page load
    rules.find({}, function (err, docs) {
        res.send(req.session.rules)
    });
})
