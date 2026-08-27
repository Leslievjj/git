import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";


app.get("/", (req, res) => {
    return res.status(200).json({message: "hello world"});
});

app.listen(PORT, () => {
    console.log(`web api is running on http://localhost:${PORT}`);
});



