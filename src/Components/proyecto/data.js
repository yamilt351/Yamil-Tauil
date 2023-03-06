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
    name: "E-Wallet Rest Api ",
    Documentation:
      "https://github.com/JoelAlexanderTrinidad/grupo-6-backend-NodeJs",
    Deploy: "Render",
    img: "https://swagger.io/getmedia/7bd69649-e725-4342-bda0-b68b7b00bc4f/SwaggerHub-UI-Example?width=800&height=366",
    url: "/WebScraper",
    alt: "E-wallet api swagger",
    description: [
      { id: 11, tec: "Nodejs", ver: "<16", icon: <DiNodejsSmall /> },
      { id: 12, tec: "Express", ver: "4.18", icon: <DiJavascript /> },
      { id: 13, tec: "MySQL", ver: "2.3.3", icon: <DiOnedrive /> },
      { id: 14, tec: "Multer", ver: "<1.4", icon: <DiHtml5Multimedia /> },
      { id: 15, tec: "Bcrypt", ver: "2.4", icon: <FaLock /> },
      { id: 16, tec: "JWT", ver: "8.5", icon: <FaCookieBite /> },
      { id: 17, tec: "Http-errors", ver: "2.0", icon: <MdWarning /> },
      { id: 18, tec: "Swagger", ver: "2.0", icon: <MdWarning /> },
      { id: 19, tec: "Morgan", ver: "~1.9.1", icon: <MdRunningWithErrors /> },
      { id: 20, tec: "Jest", ver: "27.0.6", icon: <MdSecurityUpdateGood/> },
    ],
  },
];

export default data;
