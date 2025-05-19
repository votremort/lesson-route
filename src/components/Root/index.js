import React from "react";
import './style.css';
import { NavLink, Outlet } from "react-router-dom";
import { User } from "../User";
import { useAuth } from "../../hooks/useAuth";

export const Root = () => {
  const auth = useAuth()

  return (
  <div>
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
      {auth.user ? <NavLink to='protected'>Защищенная страница</NavLink> : null}
      <User />
    </div>
    <br />
    <Outlet />
  </div>
  )
}

