import express from "express";
const app = express();

const port = 3000;
// app.listen(3000, () => {
app.listen(port, () => {
    // console.log('The server is running on port 3000');
    console.log(`The server is running on port ${port}`);
})