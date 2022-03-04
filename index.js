const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');



const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter); //this is how I mount the router endpoint, This means any request coming to /dishes endpont will be handled by dishRouter

/*
//start building REST api support for /dishes endpoint using app.all, app.get, app.post etc

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('will send all the dishes to you!');
});
app.post('/dishes',(req,res,next)=>{
    res.end('will add the dish:'+ req.body.name + 'with details' + req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.end('PUT operation not supported on /dishes');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('will delete all the dishes');
});

app.get('/dishes/:dishID',(req,res,next)=>{
    res.end('will send details of the dish' + req.params.dishID + 'to you!');
});
app.post('/dishes/:dishID',(req,res,next)=>{
    res.end('POST operaion not supported on dish' + req.params.dishID);
});
app.put('/dishes',(req,res,next)=>{
    res.write('updating the dish:'+ req.params.dishID +'\n');
    res.end('will update the dish:' + req.body.name + 'with details' + req.body.description);
});
app.delete('/dishes/:dishID',(req,res,next)=>{
    res.end('will delete the dish:' + req.params.dishID);
});

*/


app.use(express.static(__dirname + '/public'));


app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express server</h1></body></html>');
});

    //set server
    const server = http.createServer(app);
    //start server
    server.listen(port,hostname,()=>{
        console.log(`server is running at http://${hostname}:${port}`);
    });
