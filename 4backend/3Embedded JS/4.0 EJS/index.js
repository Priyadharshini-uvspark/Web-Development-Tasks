import express from "express";
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const today = new Date("nov 8, 2026 2:00:00 pm");
    const day = today.getDay();
    // console.log(day);
    let type = "a weekday";
    let adv = "Keep pushing forward, even when it gets tough.";
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "Take time to relax and recharge.";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });



    // res.render("index.ejs",{
    //     dayType:"Weekday", 
    //     advice:"Keep pushing forward, even when it gets tough."})
})
app.listen(port, () => {
    console.log(`The server is running on port ${port}.`);
})