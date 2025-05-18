import React from "react";
import './style.css';
import { NavLink, Outlet } from "react-router-dom";

export const Root = () => <>
  <div className="nav">
    <NavLink 
      to='/'
      className={ ({isActive, isPending, isTransitioning }) =>
        [
          "navLink",
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >Главная</NavLink>
    <NavLink 
      to= 'posts'
      className={ ({isActive, isPending, isTransitioning }) =>
        [
          "navLink",
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >Посты</NavLink>
    <NavLink 
      to='blog'
      className={ ({isActive, isPending, isTransitioning }) =>
        [
          "navLink",
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >Блог</NavLink>
  </div>
  <br />
  <Outlet />
 
</>

