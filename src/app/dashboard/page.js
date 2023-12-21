"use client"
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import {TfiWorld} from "react-icons/Tfi"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Footer from "../../components/Footer";

import { useContext } from "react";
import styles from "../../app/contact/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import ContactCard from "../../components/ContactCard";
import AddTopic from "../../app/addTopic/page"
import { useRouter } from "next/router";
import Styles from "./admin.css"


const sidebarItems = [
  {
    name: "Home",
    href: "/addTopic",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "https://gulfam.sviim@gmail.com",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/gulfam-saifi-b86a29166/",
    icon: AiFillLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/GulfamASB",
    icon: AiFillGithub,
  },
];

const Sidebar = () => {
  


  return (
    <>
    <div style={{marginBottom:"-35rem"}} >
      <h1>DashBoard </h1>
    <AddTopic/>
    </div>
    
    <div>


    <div className="style.sidebar__wrapper" >
  
      <div className="sidebar" >
        
        <div className="sidebar__top" >
          
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.jpg"
            alt="logo"
          />
          
          <p className="sidebar__logo-name">The Admin pannel</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link {
                  
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                    
                  </span>
                  
                  <span className="sidebar__name">{name}</span>
                  
                </Link>
              </li>
              
            );
          })}
          
          <li>
            <Link 
            href={"http://gulfamasb.github.io/reactweb"}
            >
          <p><TfiWorld/> http://Gulfam.in</p>
          </Link>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>


</>





  );
};

export default Sidebar;
