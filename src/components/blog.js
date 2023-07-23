import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "How to Learn React",
      description: "This blog post will teach you how to learn React, a JavaScript library for building user interfaces.",
      image: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      title: "The Ultimate Guide to React Hooks",
      description: "This blog post will teach you everything you need to know about React Hooks, a new feature in React that allows you to write more concise and reusable code.",
      image: "https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png",
    },
    {
      title: "React for Beginners",
      description: "This blog post is a great introduction to React for beginners. It covers the basics of React, such as components, state, and props.",
      image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    },
  ];

  return (
    <div>
      <h1 class="text-center text-3xl mb-4 font-semibold">Educational Blogs</h1>
      <div class="row">
        {blogs.map((blog, index) => (
          /*<div key={index} class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-header">
                <h2 class="text-primary">{blog.title}</h2>
              </div>
              <img src={blog.image} alt={blog.title} class="card-img-top height-50 width-50" />
              <div class="card-body">
                <p class="card-text">{blog.description}</p>
              </div>
            </div>
          </div>*/
            <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block flex flex-wrap flex-col space-x-4">
                <img class="w-full" src={blog.image} alt={blog.title} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{blog.title}</div>
                    <p class="text-gray-700 text-base">
                        {blog.description}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
