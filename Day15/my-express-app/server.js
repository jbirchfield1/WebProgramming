const express = require("express");
const app = express();

//Sample data
const users = [
    {id: 1, name:"Alice"},
    {id: 2, name:"Bob"},
];

const products = [
    {id:1, name:"Laptop", price:999},
    {id:2, name:"Phone", price:699},
];

const vegetables = [
    {id:1, name:"Cucumber", color:"green"},
    {id:2, name:"Pumpkin", color:"orange"},
];

const games = [
    {id:1, name:"Minecraft", genre:"sandbox"},
    {id:2, name:"Until Dawn", genre:"visual novel"}
]

const boardgames = [
    {id:1, name:"Uno", difficulty:"Easy"},
    {id:2, name:"Betrayal at House on the Hill", difficulty:"Hard"}
]

const languages = [
    {id:1, name:"English", difficulty:"Hard"},
    {id:2, name:"Japanese", difficulty:"Extreme"}
]

//Routing

app.get("/", (req, res) => 
res.send("Welcome to my API!"));

app.get("/users", (req, res) =>
res.json(users));

app.get("/products", (req, res) =>
res.json(products));

app.get("/vegetables", (req, res) =>
    res.json(vegetables));

app.get("/products/games", (req, res) =>
    res.json(games));

app.get("/products/boardgames", (req, res) =>
    res.json(boardgames));

app.get("/languages", (req, res) =>
    res.json(languages));

//Start server
const PORT = 3000;
app.listen(PORT, () =>
console.log(`Server running on http://localhost:${PORT}`));