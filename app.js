const express = require("express");
const service = express();

service.get("/tasks", (req, res) => {
  res.send("Reading tasks");
});

service.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  res.send("Reading task: " + id);
});

service.post("/tasks", (req, res) => {
  res.send("Creating task");
});

service.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  res.send("Updating task: " + id);
});

service.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  res.send("Deleting task: " + id);
});

service.listen(3000, () => {
  console.log("service is listening on port 3000");
});
