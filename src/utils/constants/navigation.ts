import { ROUTES } from ".";

export const navigation = [
  { id: 1, path: ROUTES.ROOT, title: "Home" },
  {
    id: 2,
    path: ROUTES.ABOUT_US,
    title: "About Us",
    subMenu: [
      {
        label: "1",
        path: "/1",
      },
    ],
    icon: true,
  },
  {
    id: 3,
    path: ROUTES.SERVICES,
    title: "Services",
    subMenu: [
      {
        label: "2",
        path: "/3",
      },
    ],
    icon: true,
  },
  { id: 4, path: ROUTES.TECHNOLOGY, title: "Technology" },
  { id: 5, path: ROUTES.ACCEPTED_INSURANCES, title: "Accepted Insurances" },
  { id: 6, path: ROUTES.PROMOTIONS, title: "Promotions" },
  {
    id: 7,
    path: ROUTES.CONTACT_US,
    title: "Contact Us",
    subMenu: [
      {
        label: "3",
        path: "/3",
      },
    ],
    icon: true,
  },
];
