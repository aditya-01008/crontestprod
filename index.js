fetch("https://ncsify.onrender.com/cron")
    .then((res) => res.text())
    .then((data) => {
        console.log(data);
    });
