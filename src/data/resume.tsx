import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anupam Shrivastava",
  initials: "AS",
  url: "https://dillion.io",
  location: "Agra,UttarPradesh,India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Passionate Software Engineer and Developer. I thrive on creating impactful projects and enhancing user experiences. Always eager to learn and share knowledge within the tech community.",
  summary:
    "Since graduating in 2024, I’ve embraced my role as a Software Engineer, dedicated to creating impactful web applications. I specialize in modern technologies such as Next.js, PostgreSQL, and the MERN stack, showcasing my expertise in full-stack development. Passionate about continuous learning, I strive to contribute to innovative projects that drive positive change in the tech community",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Postgres",
    "Docker",
    "C++",
    "Express.js",
    "MongoDB",
    "Tailwind",
    "GitHub",
    "Stripe",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sranupam28@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anupam2807",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anupam2807",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Anupamsh2807",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Code Garage Tech",
      href: "https://codegaragetech.com",
      location: "Mohali, Punjab",
      title: "Junior Software Engineer",
      logoUrl: "/cgt.jpeg",
      start: "October 2024",
      end: "Present",
      description:
        "Developed impactful web applications using Next.js and PostgreSQL, contributing to the NPO project and enhancing software solutions.",
    },
    {
      company: "Code Garage Tech",
      href: "https://codegaragetech.com",
      location: "Mohali, Punjab",
      title: "Software Engineer Intern",
      logoUrl: "/cgt.jpeg",
      start: "April 2024",
      end: "October 2024",
      description:
        "Developed impactful web applications using Next.js and PostgreSQL, contributing to the NPO project and enhancing software solutions.",
    },
    {
      company: "Code Alpha",
      href: "https://codealpha.com",
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/codealpha.jpeg",
      start: "September 2023",
      end: "October 2023",
      description:
        "Created a weather forecast app using JavaScript, HTML, and Tailwind CSS, while developing additional mini-projects to enhance web development skills.",
    },
    {
      company: "TechnoHacks EduTech Official",
      href: "https://www.technohacks.co.in/",
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/techno.jpeg",
      start: "August 2023",
      end: "September 2023",
      description:
        "Created a WhatsApp UI and a Disney+ clone using JavaScript, HTML, and Tailwind CSS, while developing additional mini-projects to enhance web development skills.",
    },
  ],

  education: [
    {
      school: "Anand Engineering College, Agra",
      degree:
        "Bachelor of Technology in Computer Science and Engineering (CSE)",
      logoUrl: "/college.png",
      start: "2020",
      end: "2024",
      cgpa: "7.73",
    },
    {
      school: "Suraj Govind Sr. Secondary School",
      degree: "Senior Secondary School (XII)",
      logoUrl: "/school.png",
      start: "2018",
      end: "2020",
      percentage: "81%",
    },
    {
      school: "M.D Jain Inter College",
      degree: "Secondary School (X)",
      logoUrl: "/school.png",
      start: "2017",
      end: "2018",
      percentage: "81%",
    },
  ],

  projects: [
    {
      title: "Movie Mingle",
      href: "https://moviemingle12.netlify.app",
      dates: "",
      active: true,
      description:
        "Movie Mingle is your go-to platform for discovering the latest upcoming, trending, and popular movies and TV shows. Search for your favorites, view detailed info, watch trailers, and create lists of what you've watched or plan to watch—all in one place!",
      technologies: [
        "React.js",
        "JavaScript",
        "MongoDB",
        "SCSS",
        "Express.js",
        "AuthO",
      ],
      links: [
        {
          type: "Website",
          href: "https://moviemingle12.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/MovieMingle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728898766/Screencast_from_14-10-24_03_08_55_PM_IST_noe6hp.webm",
    },
    {
      title: "NPO Connect",
      href: "https://npo-frontend-orcin.vercel.app",
      dates: "",
      active: true,
      description:
        "NPO Connect is a nonprofit website that streamlines event management with user and NPO dashboards for easy event registrations, fostering community engagement and support for causes.",
      technologies: [
        "Next.js",
        "JavaScript",
        "PostgreSQL",
        "Knex.js",
        "TailwindCSS",
        "Stripe",
        "Express.js",
        "Node.js",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://npo-frontend-orcin.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728898978/Screencast_from_14-10-24_03_12_30_PM_IST_aeszcx.webm",
    },
    {
      title: "Gif Genius",
      href: "https://gif-genius.vercel.app",
      dates: "",
      active: true,
      description:
        "Gif Geniius is your ultimate hub for discovering and downloading the perfect GIFs for any moment. easy-to-use search features, it lets you find, save, and share high-quality GIFs in just a few clicks..",
      technologies: [
        "React Js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gif-genius.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/GifGenius",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728899057/Screencast_from_14-10-24_03_13_45_PM_IST_aynmwj.webm",
    },
    {
      title: "Weathify",
      href: "https://forecastme-weather.netlify.app/",
      dates: "",
      active: true,
      description:
        "Weathify is a weather forecasting app that lets you view the current weather in your city and search for weather conditions in any city, state, or country.",
      technologies: [
        "HTML","Tailwind CSS","JavaScript"
      ],
      links: [
        {
          type: "Website",
          href: "https://forecastme-weather.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728969267/Screencast_from_15-10-24_10_11_21_AM_IST_bcym3f.webm",
    },
    {
      title: "Book Store",
      href: "https://bookmanagement28.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a full-stack bookstore application, Booked Store allowing users to perform CRUD operations (Create, Read, Update, Delete) to manage books and track inventory. The app features a user-friendly interface for browsing, adding, and editing books, providing a seamless experience for managing the store's catalog.",
      technologies: [
        "React.js",
        "JavaScript",
        "MongoDb",
        "ExpressJs",
        "TailwindCSS",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://bookmanagement28.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/bookfrontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728969267/Screencast_from_15-10-24_10_15_57_AM_IST_yidxzc.webm",
    },
    {
      title: "Ecomzy",
      href: "https://shopecomzy.vercel.app",
      dates: "",
      active: true,
      description:
        "Ecomzy is a simple eCommerce website where you can browse various products, add them to your cart, and enjoy a seamless shopping experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopecomzy.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/Ecomzy---Your-Ultimate-Shopping-Destination",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728969273/Screencast_from_15-10-24_10_09_54_AM_IST_msczm8.webm",
    },
    {
      title: "Course Curator",
      href: "https://coursecurator.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an basic course app where you can see some courses and filter them also.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://coursecurator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Anupam2807/CourseCurator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfnmuu7ks/video/upload/v1728969274/Screencast_from_15-10-24_10_13_13_AM_IST_o8p0ou.webm",
    },
  ],
} as const;
