import React from "react";
import {
  DiHtml5Multimedia,
  DiJavascript,
  DiNodejsSmall,
  DiOnedrive,
} from "react-icons/di";
import { FaCookieBite, FaLock } from "react-icons/fa";
import { MdAddTask, MdAdminPanelSettings, MdBlock, MdDynamicFeed, MdReadMore, MdWarning } from "react-icons/md";
const data = [
  {
    id: 1,
    name: "Social Media Rest Api",
    Documentation: "https://github.com/yamilt351/Social-media",
    Deploy: "Render",
    img: "https://www.inviaggiodasoli.com/wp-content/uploads/2017/10/Lofoten18-1620x1080.jpg",
    url: "https://rest-api-social.onrender.com/api/posts/random",
    alt: "Red-Social",
    description: [
      { id: 1, tec: "Nodejs", ver: "<16", icon: <DiNodejsSmall /> },
      { id: 2, tec: "Express", ver: "4.18", icon: <DiJavascript /> },
      { id: 3, tec: "Mongoose", ver: "6.5", icon: <DiOnedrive /> },
      { id: 4, tec: "Multer", ver: "<1.4", icon: <DiHtml5Multimedia /> },
      { id: 5, tec: "Bcrypt", ver: "2.4", icon: <FaLock /> },
      { id: 6, tec: "JWT", ver: "8.5", icon: <FaCookieBite /> },
      { id: 7, tec: "Http-errors", ver: "2.0", icon: <MdWarning /> },
      { id: 8, tec: "Helmet", ver: "6.0", icon: <MdBlock /> },
    ],
  },
  {
    id: 2,
    name: "Web Scraper ",
    Documentation: "https://github.com/yamilt351/scraper",
    Deploy: "Render",
    img: "https://www.inviaggiodasoli.com/wp-content/uploads/2017/10/Lofoten18-1620x1080.jpg",
    url: "/WebScraper",
    alt: "Web-scraper",
    description: [
      { id: 1, tec: "Apicache", ver: "1.6", icon: <MdDynamicFeed /> },
      { id: 2, tec: "Needle", ver: "3.2", icon: <MdReadMore /> },
      { id: 3, tec: "Express-rate-limit", ver: "<6.7", icon: <MdAdminPanelSettings /> },
      { id: 4, tec: "valid-url", ver: "1.0", icon: <MdAddTask /> }
    ],
  },
];

export default data;
