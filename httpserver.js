const http = require('http');


const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode =200; //the status code 200 means ok 
    res.setHeader('Content-Type', 'text/html') //what type of content are you sending to the server
    res.end("<h1>This is the sarvesh</h1> <p>hey this is your friend sarvesh he is learning nodejs</p>"); //response that you want to send 
    // console.log(req);
    console.log(req.url);
    // console.log(res);
})


// listning to a port 
server.listen(port ,(req,res)=>{console.log("server is listening on port",port)});