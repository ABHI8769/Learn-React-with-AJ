import React from 'react'
import picture from '../../assets/Abhijeet_Goswami.jpg'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src={picture}
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Hello Folks , You've Landed to the about section of "Code with AJ".
                      </h2>
                      <p className="mt-6 text-gray-600">
                      As a proficient MERN Stack Developer with a core expertise in Java, 
                      coupled with a strong command over JavaScript, I've curated an impressive
                      portfolio of full-stack projects. 
                      My hands-on experience in crafting dynamic web applications is underscored 
                      by a deep understanding of Data Structures and Algorithms. Graduating with 
                      distinction from Bachelor's of Engineering, I've consistently demonstrated a commitment to academic 
                      excellence. With a blend of technical prowess and a keen eye for innovation, I thrive in the 
                      dynamic landscape of software development, constantly pushing the boundaries of what's possible.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
