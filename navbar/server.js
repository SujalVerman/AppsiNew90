const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/save-data", (req, res) => {
  const userData = req.body;
  const content = Object.entries(userData)
    .map(([question, answer]) => `${question}: ${answer}`)
    .join("\n");

  fs.writeFile("user_responses.txt", content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ message: "Failed to save data." });
    }
    res.json({ message: "Data saved successfully!" });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
