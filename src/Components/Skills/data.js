import React from "react";
import {
  MdAssignment,
  MdAutorenew,
  MdComputer,
  MdKeyboardArrowRight,
  MdLaptopChromebook,
} from "react-icons/md";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaJsSquare,
  FaGitAlt,
  FaClock,
} from "react-icons/fa";
import { TbTool, TbNotebook } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";

const data = [
  {
    Skill: "Frontend",
    Tools: [
      {
        icon: <MdKeyboardArrowRight />,
        name: "React",
        id: 1,
        skillIcon: <FaReact />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Javascript",
        id: 2,
        skillIcon: <FaJs />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Bootstrap",
        id: 3,
        skillIcon: <BsFillBootstrapFill />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "styled-component",
        id: 4,
        skillIcon: <FaReact />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "HTML",
        id: 5,
        skillIcon: <FaHtml5 />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "CSS",
        id: 6,
        skillIcon: <FaCss3Alt />,
      },
    ],
    id: 1,
  },
  {
    Skill: "Backend",
    Tools: [
      {
        icon: <MdKeyboardArrowRight />,
        name: "Nodejs",
        id: 7,
        skillIcon: <FaNodeJs />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Javascript",
        id: 8,
        skillIcon: <FaJs />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Express",
        id: 9,
        skillIcon: <FaJsSquare />,
      },

      {
        icon: <MdKeyboardArrowRight />,
        name: "Mongo",
        id: 10,
        skillIcon: <MdAssignment />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Sequelize",
        id: 11,
        skillIcon: <MdAutorenew />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Docker",
        id: 12,
        skillIcon: <MdLaptopChromebook />,
      },
    ],
    id: 2,
  },
  {
    Skill: "Others",
    Tools: [
      {
        icon: <MdKeyboardArrowRight />,
        name: "Jest",
        id: 12,
        skillIcon: <TbTool />,
      },

      {
        icon: <MdKeyboardArrowRight />,
        name: "Swagger",
        id: 13,
        skillIcon: <TbNotebook />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Supertest",
        id: 14,
        skillIcon: <TbTool />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Linux Terminal",
        id: 15,
        skillIcon: <MdComputer />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Git workflow",
        id: 16,
        skillIcon: <FaGitAlt />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Agile and Scrum",
        id: 17,
        skillIcon: <FaClock />,
      },
    ],
    id: 3,
  },
];
export default data;
