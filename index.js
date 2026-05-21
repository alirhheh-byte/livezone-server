const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("LiveZone Server is Running ⚽");
});

app.get("/channels", (req, res) => {
    res.json([
        {
            name: "Test Channel",
            url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running");
});