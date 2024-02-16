const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/test", (req, res) => {
    res.send("Working!");
});

// const cronjob = () =>
//     ("https://ncsify.onrender.com/cron")
//         .then((res) => res.text())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error("Error fetching URL:", error);
//         });
const cronjob = async () => {
    axios
        .get("https://ncsify.onrender.com/cron")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error fetching URL:", error);
        });
};

const interval = 1000 * 60 * 5;

setInterval(cronjob, interval);
app.listen(process.env.PORT || 8000);
