'use client'

import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import AOS from 'aos';
import 'aos/dist/aos.css';

import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 700
    });
    AOS.refresh();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="flex flex-col min-h-screen">
      {/* First Section */}
      <section className="bg-gray-200 flex-grow flex flex-col justify-center items-center">
        <div className="text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Section 1 Title</h2>
          <p className="text-lg text-gray-600">Section 1 Subtitle</p>
        </div>
        {/* Three Column Card Grid */}
        <div className="flex flex-wrap justify-center mt-8">
          {/* Card 1 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 1</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4" data-aos="zoom-in">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 2</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 3</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-blue-200 flex-grow flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 data-aos="fade-left" className="text-3xl font-bold text-gray-800 mb-4">Section 2 Title</h2>
          <p  data-aos="fade-right" className="text-lg text-gray-600">Section 2 Subtitle</p>
        </div>
        {/* Three Column Card Grid */}
        <div className="flex flex-wrap justify-center mt-8">
          {/* Card 4 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 4</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 5</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card 6</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="bg-blue-200 flex-grow flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Section 2 Title</h2>
          <p className="text-lg text-gray-600">Section 2 Subtitle</p>
        </div>
        {/* Booking Form */}
        <form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Book Now
            </button>
          </div>
        </form>
      </section>

      {/* Second Section */}
      <section className="bg-blue-200 flex-grow flex flex-col justify-center items-center">
        <div className="text-center" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Section 2 Title</h2>
          <p className="text-lg text-gray-600">Section 2 Subtitle</p>
        </div>
        {/* Booking Form */}
        <form  data-aos="fade-right" className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex items-center">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                Time
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Book Now
            </button>
          </div>
        </form>
      </section>

      {/* Third Section */}
      <section className="bg-green-200 flex-grow flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Section 3 Title</h2>
          <p className="text-lg text-gray-600">Section 3 Subtitle</p>
        </div>
        {/* Three Column Card Grid - Same as before */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {currentYear} Your Company. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}