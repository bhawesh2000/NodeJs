//each file in node.js is seprate module therefore we need to import each modules

const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the dishes to you');
})
.post((req,res,next)=>{
    res.end('will add the dish:'+ req.body.name + 'with details' + req.body.description);
})
.put((req,res,next)=>{
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
    res.end('will delete all the dishes');
})

dishRouter.route('/:dishID')
.get((req,res,next)=>{
    res.end('will send details of the dish' + req.params.dishID + 'to you!');
})
.post((req,res,next)=>{
    res.end('POST operaion not supported on dish' + req.params.dishID);
})
.put((req,res,next)=>{
    res.write('updating the dish:'+ req.params.dishID +'\n');
    res.end('will update the dish:' + req.body.name + 'with details' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('will delete the dish:' + req.params.dishID);
});

module.exports = dishRouter;