const menus = [
  {
    id: 1,
    name: "Home",
    links: "/",
  },
  {
    id: 2,
    name: "Explore",
    links: "/item",
    // namesub: [
    //   // {
    //   //   id: 1,
    //   //   sub: "Explore",
    //   //   links: "/explore-01",
    //   // },
    //   // {
    //   //   id: 2,
    //   //   sub: "Creator",
    //   //   links: "/creator",
    //   // },
    //   // {
    //   //   id: 1,
    //   //   sub: "Live Mints",
    //   //   links: "/item",
    //   // },
    //   // {
    //   //   id: 2,
    //   //   sub: "Mint Details",
    //   //   links: "/item-details",
    //   // },
    // ],
  },
  // {
  //   id: 3,
  //   name: "Community",
  //   links: "#",
  //   namesub: [
  //     {
  //       id: 1,
  //       sub: "Blog",
  //       links: "/blog",
  //     },
  //     {
  //       id: 2,
  //       sub: "Blog Details",
  //       links: "/blog-details",
  //     },
  //   ],
  // },
  {
    id: 3,
    name: "Games",
    links: "#",
    namesub: [
      // {
      //   id: 1,
      //   sub: "Authors",
      //   links: "/authors",
      // },
      {
        id: 1,
        sub: "Wallet Connect",
        links: "/connect-wallet",
      },
      // {
      //   id: 3,
      //   sub: "Create Item",
      //   links: "/create-item",
      // },
      // {
      //   id: 4,
      //   sub: "Login",
      //   links: "/login",
      // },
      // {
      //   id: 5,
      //   sub: "Register",
      //   links: "/register",
      // },
    ],
  },

  {
    id: 4,
    name: "Mints",
    links: "#",
    namesub: [
      {
        id: 1,
        sub: "Live Mints",
        links: "/live",
      },
      {
        id: 2,
        sub: "Closed Mints",
        links: "/closed",
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Contact",
  //   // links: "/contact",
  //   links: "#",
  //   // namesub: [
  //   //     {
  //   //         id: 1,
  //   //         sub: 'Contact 01',
  //   //         links: '/contact'
  //   //     },
  //   // ],
  // },
];

export default menus;
