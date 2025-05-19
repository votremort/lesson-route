import React from "react";
import "./style.css";
import { content } from "./content"
import { Link } from "react-router-dom";
export const Blog = () => {
  return (
    <div className="blog">
      Это страница блога
      {content.map((item) => <div key={item.id}>
        <div>
          <Link to={`/blog/${item.id}`}>
            {item.name}
          </Link>
        </div>
      </div>)

      }
    </div>
  )
}
