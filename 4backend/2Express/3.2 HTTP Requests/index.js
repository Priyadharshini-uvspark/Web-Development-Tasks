import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("heloo express, im testing this");
    res.send("<h1>Hello website</h1>");
})

app.get('/about', (req, res) => {
    // console.log("<h1>About page</h1>");
    res.send("<h1>About page</h1><p>Checking about page</p>");
})

app.get('/contact', (req,res) => {
    res.send('<h1>Contact page</h1><p>contact me: +1 234 4567 89</p>');
})

app.listen(port , () => {
    console.log(`The server is running on port ${port}`);
})