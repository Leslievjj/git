import express from "express";
const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;


app.get("/", (req, res) => {
    return res.status(200).json({message: "hello world"});
});

app.get("/testeurs", (req, res) => {
    return res.status(200).json({message: "il est 15.12"});
});

app.get("/pullrequest", (req, res) => {
    return res.status(200).json({message: "creation pull request 1"});
});


app.listen(PORT, () => {
    console.log(`web api is running on http://localhost:${PORT}`),
});



