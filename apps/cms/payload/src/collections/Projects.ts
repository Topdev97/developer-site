import  {CollectionConfig}  from "payload";
const Projects: CollectionConfig = {
  slug: "projects",
  auth: true,
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      if (user?.collection == "users") {
        return true;
      }
    },
    delete: ({ req: { user } }) => {
      if (user?.collection == "users") {
        return true;
      }
    },
    create: ({ req: { user } }) => {
      if (user?.collection == "users") {
        return true;
      }
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "repositoryLink",
      type: "text",
      required: true,
    },
    {
      name: "webAppLink",
      type: "text",
      required: false,
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "techs", // required
      type: "array", // required
      label: "Techs Slider",
      minRows: 1,
      maxRows: 10,
      required:true,
      labels: {
        singular: "Tech",
        plural: "Techs",
      },
      fields: [
        // required
        {
          name: "techName",
          type: "text",
        },
      ],
    },
    {
        name: "labels", // required
        type: "array", // required
        label: "Labels Slider",
        required:true,
        minRows: 1,
        maxRows: 10,
        labels: {
          singular: "Label",
          plural: "Labels",
        },
        fields: [
          // required
          {
            name: "labelName",
            type: "text",
          },
        ],
      },
      {
        name: "images", // required
        type: "array", // required
        label: "Images Slider",
        required:true,
        minRows: 1,
        maxRows: 10,
        labels: {
          singular: "Slide",
          plural: "Slides",
        },
        fields: [
          // required
          {
            name: "url",
            type: "text",
          },
        ],
      },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Projects;
