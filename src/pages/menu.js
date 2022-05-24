// const menus = [
//   {
//     id: 1,
//     name: "Home",
//     links: "/",
//   },
//   {
//     id: 2,
//     name: "Explore",
//     links: "/item",
//     // namesub: [
//     //   // {
//     //   //   id: 1,
//     //   //   sub: "Explore",
//     //   //   links: "/explore-01",
//     //   // },
//     //   // {
//     //   //   id: 2,
//     //   //   sub: "Creator",
//     //   //   links: "/creator",
//     //   // },
//     //   // {
//     //   //   id: 1,
//     //   //   sub: "Live Mints",
//     //   //   links: "/item",
//     //   // },
//     //   // {
//     //   //   id: 2,
//     //   //   sub: "Mint Details",
//     //   //   links: "/item-details",
//     //   // },
//     // ],
//   },
//   // {
//   //   id: 3,
//   //   name: "Community",
//   //   links: "#",
//   //   namesub: [
//   //     {
//   //       id: 1,
//   //       sub: "Blog",
//   //       links: "/blog",
//   //     },
//   //     {
//   //       id: 2,
//   //       sub: "Blog Details",
//   //       links: "/blog-details",
//   //     },
//   //   ],
//   // },
//   {
//     id: 3,
//     name: "Games",
//     links: "#",
//     namesub: [
//       // {
//       //   id: 1,
//       //   sub: "Authors",
//       //   links: "/authors",
//       // },
//       {
//         id: 1,
//         sub: "Wallet Connect",
//         links: "/connect-wallet",
//       },
//       // {
//       //   id: 3,
//       //   sub: "Create Item",
//       //   links: "/create-item",
//       // },
//       // {
//       //   id: 4,
//       //   sub: "Login",
//       //   links: "/login",
//       // },
//       // {
//       //   id: 5,
//       //   sub: "Register",
//       //   links: "/register",
//       // },
//     ],
//   },

//   {
//     id: 4,
//     name: "Mints",
//     links: "#",
//     namesub: [
//       {
//         id: 1,
//         sub: "Live Mints",
//         links: "/live",
//       },
//       {
//         id: 2,
//         sub: "Closed Mints",
//         links: "/closed",
//       },
//     ],
//   },
//   // {
//   //   id: 5,
//   //   name: "Contact",
//   //   // links: "/contact",
//   //   links: "#",
//   //   // namesub: [
//   //   //     {
//   //   //         id: 1,
//   //   //         sub: 'Contact 01',
//   //   //         links: '/contact'
//   //   //     },
//   //   // ],
//   // },
// ];

// export default menus;
const menus = [
  {
    id: 1,
    name: "Home",
    links: "/",
    scrolling: false,
    hide: false,
  },
  // {
  //   id: 2,
  //   name: "Explore",
  //   links: "/item",
  // },

  {
    id: 2,
    name: "Roadmap",
    links: "/#roadmap",
    scrolling: true,
    hide: false,
  },

  {
    id: 3,
    name: "White Paper",
    links:
      "https://firebasestorage.googleapis.com/v0/b/solona-buddha.appspot.com/o/Elves%20Of%20Elysium%20White%20Paper.pdf?alt=media&token=3835cc77-f5f5-477a-8e2b-f3b85d0261d3",
    scrolling: true,
    hide: false,
  },
  {
    id: 4,
    name: "Mints",
    links: "#",
    scrolling: false,
    hide: true,
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
  {
    id: 4,
    name: "Services",
    links: "#",
    scrolling: false,
    hide: false,
    namesub: [
      {
        id: 1,
        sub: "NFT Artwork",
        links: "#",
      },
      {
        id: 2,
        sub: "Web Development",
        links: "#",
      },
      {
        id: 3,
        sub: "UI/UX Development",
        links: "#",
      },
    ],
  },
  {
    id: 5,
    name: "About Us",
    links: "/#about",
    scrolling: true,
    hide: false,
  },
  {
    id: 6,
    name: "FAQ",
    scrolling: true,
    hide: false,
    links: "/#faq",
  },
];

export default menus;
