var express = require("express");
var corss = require("cors");
const bodyParser = require('body-parser');
const app = express();

app.use(corss());


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
var { createPool } = require('mysql');
var pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shri shyam',
    connectionLimit: 10
});




app.get("/api/get", (req, res) => {

    pool.query('select * from category', (err, result, fields) => {
        req.app.locals.result2=result;
        res.send(result);



    })
});
var name = "";
app.post("/api/get/dish", (req, res) => {

    name = req.body.name;
  
 call();

//------------------------------3rd-----------------------------    
}) 
 
function call(){



app.get("/api/get/dishcat", (req, res) => {

   
  pool.query("select * from "+name, (err, result3, fields) => {
    
       res.send(result3);
   
//------------------------------3rd-----------------------------    
}) ;
console.log(name);

});
};

app.listen(3001, () => {
    console.log("running");
})