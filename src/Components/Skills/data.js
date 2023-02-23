import React from "react";
import {
  MdAnalytics,
  MdAssignment,
  MdAutorenew,
  MdKeyboardArrowRight,
} from "react-icons/md";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaJsSquare,
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
        id: 1,
        skillIcon: <FaNodeJs />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Javascript",
        id: 2,
        skillIcon: <FaJs />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Express",
        id: 3,
        skillIcon: <FaJsSquare />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "MySQL",
        id: 4,
        skillIcon: <MdAnalytics />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Mongo",
        id: 5,
        skillIcon: <MdAssignment />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Sequelize",
        id: 6,
        skillIcon: <MdAutorenew />,
      },
    ],
    id: 2,
  },
  {
    Skill: "Testing and Documentation",
    Tools: [
      {
        icon: <MdKeyboardArrowRight />,
        name: "Jest",
        id: 1,
        skillIcon: <TbTool />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Cypress",
        id: 2,
        skillIcon: <TbTool />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Swagger",
        id: 3,
        skillIcon: <TbNotebook />,
      },
      {
        icon: <MdKeyboardArrowRight />,
        name: "Supertest",
        id: 4,
        skillIcon: <TbTool />,
      },
    ],
    id: 3,
  },
];
export default data;
