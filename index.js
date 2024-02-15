fetch("https://ncsify.onrender.com")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
