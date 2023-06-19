import React from "react";
import { Link } from "react-router-dom";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./sideNav.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const SideNavItems = () => {
  const items = [
    {
      className: "option",
      text: "Session",
      link: "/session",
    },
    {
      className: "option",
      icon: "play",
      text: "Department",
      link: "/departments",
      children: [{ texts: "Hello" }],
    },
    {
      className: "option",
      text: "Program",
      link: "/programs",
    },
    {
      className: "option",
      icon: "sign-in",
      text: "Subject",
      link: "/subjects",
      children: [{ texts: "Hello" }],
    },
    {
      className: "option",
      icon: "file-text-o",
      text: "Exam",
      link: "/exams",
      children: ["Add New Exam"],
    },
    {
      className: "option",
      icon: faHome,
      text: "Package",
      link: "/packages",
      id: "packages",
    },
    {
      className: "option",
      text: "Person",
      link: "/intermediate",
    },
    {
      className: "option",
      text: "Package History",
      link: "/packageHistory",
    },
    // {
    //     className: 'option',
    //     icon: 'sign-out',
    //     text: 'Assignment',
    //     link: '/assignments',
    //     children: [{texts:'Hellox'}]
    // },
  ];

  const showItems = () => {
    return items.map((item, i) => {
      // const childrens = () => {
      //     return item.children.map((child,j)=> {
      //         return(
      //             <div>
      //                 {child.texts}
      //             </div>
      //         )
      //     })
      // }

      return (
        <div key={i} className={item.className}>
          {/* <a data-toggle = "collapse" href= "#collapseExample" role= "button" aria-expanded="false" aria-controls="collapseExample"> */}
          {/* <FontAwesomeIcon icon= {item.icon}/> */}
          <Link to={item.link}>{item.text}</Link>
          {/* </a> */}
        </div>
      );
    });
  };

  return <div>{showItems()}</div>;
};

export default SideNavItems;
