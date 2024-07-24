import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SidebarBlog from './SidebarBlog';

function SingleBlogPage() {
    const data = useLoaderData();
    const {title,image , category , author , published_date, reading_time, content} = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white">
        <h1 className="text-5xl lg:text-6xl leading-snug font-bold mb-5">
          Single Blog Page
        </h1>
      </div>

      {/* Blog Detail */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            <FaClock className="inline-flex items-center mr-2 " />{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div>
            <p className="text-base text-justify text-gray-500 mb-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati rem iusto molestias porro reprehenderit. Doloribus illum debitis libero provident tenetur quod distinctio laboriosam necessitatibus! Quasi error ad nulla quas dolores, quisquam voluptate minima in cum voluptatum eius delectus labore id quia! Error, earum tempora commodi culpa voluptate minima dolorem repudiandae temporibus debitis, nobis odit animi enim quasi quaerat praesentium minus architecto provident doloremque ea nihil sequi cupiditate blanditiis quae? Nam quia tenetur aliquid! Officiis esse veniam accusamus expedita quas laboriosam id eius repudiandae, aperiam non, numquam deleniti. Sunt, sequi tenetur? Debitis perspiciatis exercitationem, nulla molestias minus veniam ullam laborum.</p>
            <p className="text-base text-justify text-gray-500 mb-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati rem iusto molestias porro reprehenderit. Doloribus illum debitis libero provident tenetur quod distinctio laboriosam necessitatibus! Quasi error ad nulla quas dolores, quisquam voluptate minima in cum voluptatum eius delectus labore id quia! Error, earum tempora commodi culpa voluptate minima dolorem repudiandae temporibus debitis, nobis odit animi enim quasi quaerat praesentium minus architecto provident doloremque ea nihil sequi cupiditate blanditiis quae? Nam quia tenetur aliquid! Officiis esse veniam accusamus expedita quas laboriosam id eius repudiandae, aperiam non, numquam deleniti. Sunt, sequi tenetur? Debitis perspiciatis exercitationem, nulla molestias minus veniam ullam laborum.</p>
          </div>
        </div>

        <div className='lg:w-1/2'>
            <SidebarBlog/>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage
