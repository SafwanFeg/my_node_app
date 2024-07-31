const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
  
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
app.get('/write',(req,res)=>{
    fs.writeFileSync('/data/file.txt', 'this is my file Node.js!\n');
    res.send ('file Written!');
});

app.get('/read', (req,res)=>{
    const data=fs.readFileSync('/data/file.txt','utf-8');
    res.send(data);
});
app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
    // Starts the server on port 80 and logs a message.
}
);
