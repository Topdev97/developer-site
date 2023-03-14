import express from "express";
const app = express();
const projects = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
];
const token = "supersecretoken";
// Login endpoint
app.post("/login", (req, res) => {
  // Here you can implement your logic for user login
  // For example, validate user credentials and generate a JWT token
  // Then return the token in the response
  res.json({ ...req.body, token });
});

app.get("/profile", (req, res) => {
  // Here you can implement your logic for user login
  // For example, validate user credentials and generate a JWT token
  // Then return the token in the response
  // res.json({...req.body,token});
});
app.post("/profile", (req, res) => {
  // Here you can implement your logic for user login
  // For example, validate user credentials and generate a JWT token
  // Then return the token in the response
  // res.json({...req.body,token});
});

// Signup endpoint
app.post("/signup", (req, res) => {
  // Here you can implement your logic for user signup
  // For example, create a new user record in your database
  // Then return a success response
  res.json({ message: "User created successfully" });
});

// Products endpoint
app.get("/projects", (req, res) => {
  // Here you can implement your logic to retrieve products
  // For example, query the products from your database
  // Then return the products in the response
  res.json(projects);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
