const http = require('http');
const fs = require('fs');


const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  
     if(req.url == "/about" ) {
        res.statusCode =200; //the status code 200 means ok
        res.end("<h1>This is the sarvesh</h1> <p>hey this is your friend sarvesh he is learning nodejs</p>"); //response that you want to send 
         
     }
     else if(req.url == "/contact") {
        res.statusCode =200; //the status code 200 means ok
        res.end("<h1>Contact us page </h1> <p>hey this is the contact us page </p>"); //response that you want to send 

     }

     else if(req.url == "/") {
        res.statusCode =200; //the status code 200 means ok
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
     

     }
     else {
        res.statusCode =404;
        res.end("<h1>Not founded </h1> <p>this page doi not exist </p>");
         
     }
   
  
    // console.log(req);
    console.log(req.url);
    // console.log(res);
})


// listning to a port 
server.listen(port ,(req,res)=>{console.log("server is listening on port",port)});