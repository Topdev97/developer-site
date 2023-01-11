const services = [
  {
    id:1,
    price:15000,
    name:"Landing page",
    path: "landing-page",
    discount: null,
    image: "",
    priceMonthly: 0,
    description:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/services_description%2Fwebsite_english.md?alt=media&token=bf83a6be-d4d9-49ce-b1e8-511778f66e93",
  },
  {
    id:2,
    description:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/services_description%2Flanding_english.md?alt=media&token=bf83a6be-d4d9-49ce-b1e8-511778f66e93",
    image: "",
    name: "Web Site",
    discount: null,
    path: "web-site",
    priceMonthly:18000,
    price:8000
  },
];

const projects = [
  {
    "id": 1,
    "title": "NodeJS Backend with Firebase Auth",
    "description": "# NodeJS Backend with Firebase Auth\n\nThe following project is an implementation of the firebase authentication service in a backend made in NodeJS. This has a number of advantages, such as:\n\n- Have multiple authentication providers such as Google, Facebook, Github, Email, etc...\n- Manage users from the Firebase suite and use associated services such as notifications and emails\n- Have a system already tested and constantly improved by Google\n\n",
    "shortDescription": "Improve your security and auth management with this authentication solution for nodejs",
    "techs": ["firebase", "nodejs", "express"],
    "labels": ["backend", "nodejs", "firebase"],
    "repositoryLink": "https://github.com/davc93/firebase-auth-middleware-for-nodejs",
    "webAppLink": null,
    "images": [],
    "slug": "nodejs-backend-with-firebase-auth"
  },
  {
    "id": 2,
    "title": "Mercadopago NodeJS Server with Typescript",
    "description": "# Mercadopago NodeJS Server with Typescript\n\nMercadopago is a free market payment platform ,is present throughout Latin America.\n\nThe following implementation is the server that allows processing customer orders and obtaining a payment id to be later used to direct the user to the payment module within the site.\n\n## Features\n\n- Checkout within the same site\n- Fast payment and great shopping experience for users\n- Accept multiple payment methods (credit, debit,banks transferences, mercadopago account)\n- Customizable\n- Multiple validations, from payments to the identity of the buyer\n\n",
    "shortDescription": "Fast and excellence in customer experiencie with Mercadopago checkout pro",
    "techs": ["typescript", "nodejs", "mercadopago", "express", "mongodb"],
    "labels": ["backend", "nodejs", "ecommerce"],
    "repositoryLink": "https://github.com/davc93/mercadopago-server-typescript",
    "webAppLink": null,
    "images": [],
    "slug": "mercadopago-nodejs-server-with-typescript"
  },
  {
    "id": 3,
    "title": "NodeJS Clean Architecture Backend",
    "description": "# NodeJS Clean Architecture Backend\n\nThis architecture is used in most of my projects made in NodeJS, it separates the network, controller and store logic to have versatility when integrating different database engines and services such as emails, authentication, special middlewares, etc...\n",
    "shortDescription": "a NodeJS backend with expresse build on clean architecture",
    "techs": [
      "nodejs",
      "mongodb",
      "postgresql",
      "typescript",
      "docker",
      "express"
    ],
    "labels": ["backend", "nodejs"],
    "repositoryLink": "https://github.com/davc93/my-nodejs-backend",
    "webAppLink": null,
    "images": [],
    "slug": "nodejs-clean-architecture-backend"
  },
  {
    "id": 4,
    "title": "Doctor Casanova Landing page",
    "description": "# Doctor Casanova Landing page\n\nThe following project is a landing page made only in html and css and deployed in netlify,\nIt has SEO and analytical services (Google Analytics 4, Google Search Console, Google Tag Manager), the goal of this page is offer the home medicine services of Doctor Casanova in the city of La Serena in Chile",
    "shortDescription": "Web Site made to catch customer and improve sales ",
    "techs": [
      "html5",
      "css3",
      "javascript",
      "netlify",
      "webpack",
      "google-tag-manager",
      "google-analytics"
    ],
    "labels": ["frontend", "vanilla"],
    "repositoryLink": "https://github.com/davc93/vanilla-doctorcasanova",
    "webAppLink": "https://doctorcasanova.cl",
    "images": [
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1673050166/davc93/projects/images/4-doctor-casanova_android-small.jpg",
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1673050168/davc93/projects/images/4-doctor-casanova_desktop-large.jpg",
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1673050168/davc93/projects/images/4-doctor-casanova_ios.jpg",
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1673050169/davc93/projects/images/4-doctor-casanova_desktop-small.jpg",
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1673050165/davc93/projects/images/4-doctor-casanova_android-large.jpg"
    ],
    "slug": "doctor-casanova-landing-page"
  }
]


export default {
  services,
  projects,
};
