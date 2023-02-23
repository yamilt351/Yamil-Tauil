import React from "react";
import {
  MdHome,
  MdDoneAll,
  MdEditCalendar,
  MdPersonSearch,
} from "react-icons/md";

const data = [
  { name: "Home", URL: "#Home", id: 1, icon: <MdHome /> },
  { name: "Proyects", URL: "#Proyects", id: 2, icon: <MdEditCalendar /> },
  { name: "Skills", URL: "#Skills", id: 3, icon: <MdDoneAll /> },
  { name: "About me", URL: "#About", id: 4, icon: <MdPersonSearch /> },
];

export default data;
