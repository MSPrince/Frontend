import React from "react";
import BlogPage from "../components/BlogPage";

function Blogs() {
  return (
    <>
      <div>
        <div className="py-40 bg-black text-center text-white">
          <h1 className="text-5xl lg:text-6xl leading-snug font-bold mb-5">
            Welcome to Our Blog
          </h1>
        </div>
        {/* all blog Container */}
        <div className="max-w-7xl mx-auto">
          <BlogPage />
        </div>
      </div>
    </>
  );
}

export default Blogs;
