interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

const nav: Nav[] = [
  { id: 1, name: "Search", path: "/search", icon: "bi-search" },
  { id: 2, name: "Donate", path: "/donate" },
  { id: 3, name: "Fundraise", path: "/fundraise" },
];

export default nav;
