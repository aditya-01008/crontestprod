const express = require("express");
require("dotenv").config();

const app = express();

const cronjob = () =>
    fetch("https://ncsify.onrender.com/cron")
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
        });

const interval = 1000 * 60 * 14;

setInterval(cronjob, interval);
app.listen(process.env.PORT || 8000);
