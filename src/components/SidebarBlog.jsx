import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarBlog() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 7)))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blog</h3>
        <div>
          {popularBlogs.slice(0, 6).map((blog) => (
            <div
              className="my-5 border-b-2 border-spacing-2 px-4"
              key={blog.id}
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="idebar-blog__link text-base font-semibold text-blue-600 hover:text-orange-500 inline-flex items-center py-1 transition-colors duration-300"
              >
                Read More <FaArrowRight className="ml-2 mt-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs */}
      <div className="">
        <h3 className="text-2xl font-bold px-4 mt-16">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 11).map((blog) => (
            <div
              className="my-5 border-b-2 border-spacing-2 px-4"
              key={blog.id}
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="idebar-blog__link text-base font-semibold text-orange-300 hover:text-orange-500 inline-flex items-center py-1 transition-colors duration-300"
              >
                Read More <FaArrowRight className="ml-2 mt-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarBlog;
