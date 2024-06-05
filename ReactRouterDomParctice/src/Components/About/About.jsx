import React from "react";

import fbImage from "../../assets/fbImage.jpg"
export default function About(){

    return(
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src={fbImage}
                          className="rounded-full"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          About Me !
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Hi there! I'm a passionate and skilled React developer with a knack for building dynamic and responsive web applications. With several years of experience in the industry, I have honed my abilities to create intuitive user interfaces and deliver seamless user experiences.
                      </p>
                      <p className="mt-4 text-gray-600">
                      React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It aims to allow developers to create fast user interfaces for websites and applications alike easily. The main concept of React. js is virtual DOM
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
}