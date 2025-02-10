const express = require("express");
const app = express();
const port = 3000;
let books = [
  {
    id: 1234,
    title: "My First Book",
    author: "Me and You",
    publication: "Never",
    price: 500,
    publication_year: 2025,
  },
];

app.get("/", (req, res) => res.json(books));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
