// const http = require('http');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cors = require('cors'); // Import the CORS middleware



// const server = http.createServer((req, res) => {

//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.url === '/rundemo') {
//     // Replace 'script.py' with the path to your Python file
//     const pythonProcess = exec('python script.py', (error, stdout, stderr) => {

//       if (error) {
//         console.error(`Error executing Python script: ${error}`);
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end(`Error executing Python script: ${error}`);
//         return;
//       }

//       console.log(`Python script stdout: ${stdout}`);
//       console.error(`Python script stderr: ${stderr}`);
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`Rajat is chadd: ${stdout}`);
//     });

//     pythonProcess.on('exit', (code) => {
//       console.log(`Python script process exited with code ${code}`);
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found');
//   }
// });



// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['PUT'],
  allowedHeaders: ['Content-Type']
}));

app.all('/rundemo', (req, res) => {
  const pythonProcess = exec('python script.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).send(`Error executing Python script: ${error}`);
    }

    console.log(`Python script stdout: ${stdout}`);
    console.error(`Python script stderr: ${stderr}`);
    res.send(`Rajat is chadd: ${stdout}`);
  });

  pythonProcess.on('exit', (code) => {
    console.log(`Python script process exited with code ${code}`);
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
