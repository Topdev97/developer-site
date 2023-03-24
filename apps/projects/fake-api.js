const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const projects = [
  {
    id: 1,
    slug: "project-2",
    link: "https: //example.com",
    repository: "https: //github.com/example",
    title: "ExampleProject",
    shortDescription: "Thisisanexampleproject",
    published: true,
    description: "#Heading1\n\n##Heading2\n\ntloremipsum.....",
    createdAt: "2023-03-12T23:56:17.380Z",
    images: [
      {
        id: 4,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:25.446Z",
      },
      {
        id: 3,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:24.643Z",
      },
      {
        id: 2,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.842Z",
      },
      {
        id: 1,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.014Z",
      },
    ],
    Labels: [
      {
        id: 1,
        title: "vue",
        type: "tech",
        createdAt: "2023-03-12T23:55:45.465Z",
        LabelProject: {
          id: 1,
          projectId: 1,
          labelId: 1,
          createdAt: "2023-03-12T23:56:42.752Z",
        },
      },
      {
        id: 3,
        title: "react",
        type: "tech",
        createdAt: "2023-03-12T23:55:52.844Z",
        LabelProject: {
          id: 2,
          projectId: 1,
          labelId: 3,
          createdAt: "2023-03-12T23:56:53.825Z",
        },
      },
      {
        id: 4,
        title: "angular",
        type: "tech",
        createdAt: "2023-03-12T23:55:56.520Z",
        LabelProject: {
          id: 12,
          projectId: 1,
          labelId: 4,
          createdAt: "2023-03-12T23:58:41.893Z",
        },
      },
    ],
  },
  {
    id: 2,
    link: "https: //example.com",
    slug: "project-1",
    repository: "https: //github.com/example",
    title: "Project 2",
    shortDescription: "Thisisanexampleproject",
    published: true,
    description: "#Heading1\n\n##Heading2\n\ntloremipsum.....",
    createdAt: "2023-03-12T23:56:17.380Z",
    images: [
      {
        id: 4,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:25.446Z",
      },
      {
        id: 3,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:24.643Z",
      },
      {
        id: 2,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.842Z",
      },
      {
        id: 1,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.014Z",
      },
    ],
    Labels: [
      {
        id: 1,
        title: "vue",
        type: "tech",
        createdAt: "2023-03-12T23:55:45.465Z",
        LabelProject: {
          id: 1,
          projectId: 1,
          labelId: 1,
          createdAt: "2023-03-12T23:56:42.752Z",
        },
      },
      {
        id: 3,
        title: "react",
        type: "tech",
        createdAt: "2023-03-12T23:55:52.844Z",
        LabelProject: {
          id: 2,
          projectId: 1,
          labelId: 3,
          createdAt: "2023-03-12T23:56:53.825Z",
        },
      },
      {
        id: 4,
        title: "angular",
        type: "tech",
        createdAt: "2023-03-12T23:55:56.520Z",
        LabelProject: {
          id: 12,
          projectId: 1,
          labelId: 4,
          createdAt: "2023-03-12T23:58:41.893Z",
        },
      },
    ],
  },
  {
    id: 3,
    link: "https: //example.com",
    slug: "project-3",
    repository: "https: //github.com/example",
    title: "Project 3",
    shortDescription: "Thisisanexampleproject",
    published: true,
    description: "#Heading1\n\n##Heading2\n\ntloremipsum.....",
    createdAt: "2023-03-12T23:56:17.380Z",
    images: [
      {
        id: 4,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:25.446Z",
      },
      {
        id: 3,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:24.643Z",
      },
      {
        id: 2,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.842Z",
      },
      {
        id: 1,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.014Z",
      },
    ],
    Labels: [
      {
        id: 1,
        title: "vue",
        type: "tech",
        createdAt: "2023-03-12T23:55:45.465Z",
        LabelProject: {
          id: 1,
          projectId: 1,
          labelId: 1,
          createdAt: "2023-03-12T23:56:42.752Z",
        },
      },
      {
        id: 3,
        title: "react",
        type: "tech",
        createdAt: "2023-03-12T23:55:52.844Z",
        LabelProject: {
          id: 2,
          projectId: 1,
          labelId: 3,
          createdAt: "2023-03-12T23:56:53.825Z",
        },
      },
      {
        id: 4,
        title: "angular",
        type: "tech",
        createdAt: "2023-03-12T23:55:56.520Z",
        LabelProject: {
          id: 12,
          projectId: 1,
          labelId: 4,
          createdAt: "2023-03-12T23:58:41.893Z",
        },
      },
    ],
  },
  {
    id: 4,
    slug: "project-4",
    link: "https: //example.com",
    repository: "https: //github.com/example",
    title: "Project 4",
    shortDescription: "Thisisanexampleproject",
    published: true,
    description: "#Heading1\n\n##Heading2\n\ntloremipsum.....",
    createdAt: "2023-03-12T23:56:17.380Z",
    images: [
      {
        id: 4,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:25.446Z",
      },
      {
        id: 3,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:24.643Z",
      },
      {
        id: 2,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.842Z",
      },
      {
        id: 1,
        url: "https://www.next.com/images/branding/googlelogo/1x/googlelogo_",
        projectId: 1,
        createdAt: "2023-03-12T23:56:23.014Z",
      },
    ],
    Labels: [
      {
        id: 1,
        title: "vue",
        type: "tech",
        createdAt: "2023-03-12T23:55:45.465Z",
        LabelProject: {
          id: 1,
          projectId: 1,
          labelId: 1,
          createdAt: "2023-03-12T23:56:42.752Z",
        },
      },
      {
        id: 3,
        title: "react",
        type: "tech",
        createdAt: "2023-03-12T23:55:52.844Z",
        LabelProject: {
          id: 2,
          projectId: 1,
          labelId: 3,
          createdAt: "2023-03-12T23:56:53.825Z",
        },
      },
      {
        id: 4,
        title: "angular",
        type: "tech",
        createdAt: "2023-03-12T23:55:56.520Z",
        LabelProject: {
          id: 12,
          projectId: 1,
          labelId: 4,
          createdAt: "2023-03-12T23:58:41.893Z",
        },
      },
    ],
  },
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
app.get("/v1/projects", (req, res) => {
  const slug = req.query.slug;
  if (slug) {
    const project = projects.find((project) => (project.slug = slug));
    res.status(200).json(project);
  } else {
    res.status(200).json(projects);
  }

  // Here you can implement your logic to retrieve products
  // For example, query the products from your database
  // Then return the products in the response
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
