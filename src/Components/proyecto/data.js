import React from "react";
import {
  DiHtml5Multimedia,
  DiJavascript,
  DiNodejsSmall,
  DiOnedrive,
} from "react-icons/di";
import { FaCookieBite, FaLock } from "react-icons/fa";
import {
  MdBlock,
  MdRunningWithErrors,
  MdSecurityUpdateGood,
  MdWarning,
} from "react-icons/md";
const data = [
  {
    id: 1,
    name: "Social Media Rest Api",
    Documentation: "https://github.com/yamilt351/Social-media",
    Deploy: "Render",
    img: "https://user-images.githubusercontent.com/88646148/222991947-19606d07-222d-46f0-94be-bf60e3d74554.png",
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
      { id: 9, tec: "Morgan", ver: "~1.9.1", icon: <MdRunningWithErrors /> },
      { id: 10, tec: "Jest", ver: "27.0.6", icon: <MdSecurityUpdateGood /> },
    ],
  },
  {
    id: 2,
    name: "Web Scraper",
    Documentation: "https://github.com/yamilt351/scraper",
    Deploy: "Render",
    img: "https://user-images.githubusercontent.com/88646148/224133149-05f13b38-47d0-4991-bad9-703768492fae.png",
    url: "https://scraper-5ask.onrender.com/public/html.html",
    alt: "web-scrapper",
    description: [
      { id: 11, tec: "Nodejs", ver: "<16", icon: <DiNodejsSmall /> },
      { id: 12, tec: "Express", ver: "4.18", icon: <DiJavascript /> },
      { id: 17, tec: "Http-errors", ver: "2.0", icon: <MdWarning /> },
      { id: 13, tec: "Express-rate-limit", ver: "2.3", icon: <DiJavascript /> },
      { id: 18, tec: "Swagger", ver: "2.0", icon: <MdWarning /> },
      { id: 19, tec: "Morgan", ver: "~1.9.1", icon: <MdRunningWithErrors /> },
      { id: 20, tec: "Jest", ver: "27.0.6", icon: <MdSecurityUpdateGood /> },
    ],
  },
];

export default data;
