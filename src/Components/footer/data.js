import React from "react";
import { FaGitAlt, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdFileCopy } from "react-icons/md"
import resume from "../Home/resume-Yamil-Tauil.pdf"

const data=[
	{name:"Linkedin",url:"https://www.linkedin.com/in/yamil-tauil/",id:1,icon:<FaLinkedinIn/>},
	{name:"Github",url:"https://github.com/yamilt351",id:2,icon:<FaGitAlt/>},
	{name:"email", url:"mailto:eyt351-yamil@hotmail.com", id:3, icon:<MdAlternateEmail/>},
	{name:"Resume", url:resume, id:4,icon:<MdFileCopy/>}
]

export default data;
