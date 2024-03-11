 export interface LinkItem {
    id: number;
    title: string;
    url: string;
    details: string;
  }
  
  export const links: LinkItem[] = [
    { id: 1, title: "Home", url: "/", details: "Welcome to the home page" },
    {
      id: 2,
      title: "About",
      url: "/about",
      details: "Learn more about JavaScript",
    },
    { id: 3, title: "CSS", url: "/css", details: "Learn more about CSS" },
    { id: 4, title: "HTML", url: "/html", details: "Learn more about HTML" },
    {
      id: 5,
      title: "HTML Introduction",
      url: "/html#Introduction",
      details: "Learn more about HTML",
    },
    {
      id: 6,
      title: "Section 3",
      url: "/product#section3",
      details: "Learn more about Section 3",
    },
    {
      id: 7,
      title: "Revolution",
      url: "/html#Revolution",
      details: "Learn more about Section 3",
    },
    {
      id: 8,
      title: "Online Courses",
      url: "/#online_courses",
      details: "Explore our online courses",
    },
  ];