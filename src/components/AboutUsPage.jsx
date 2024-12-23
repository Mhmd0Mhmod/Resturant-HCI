import React from "react";
import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center bg-orange-100 px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Discover Our Passion for Freshness
        </h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Bringing You the Best of Nature and Culinary Excellence.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-12 md:px-12">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src={Logo}
            alt="Our Story"
            className="w-full rounded-lg shadow-md md:w-1/2"
          />
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="text-lg">
              Founded with the vision of making fresh and healthy food
              accessible, we pride ourselves on delivering high-quality produce
              and dishes right to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-orange-50 px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-orange-500">🍎</div>
            <h3 className="text-xl font-bold">Freshness First</h3>
            <p>We source only the freshest ingredients daily.</p>
          </div>
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-orange-500">🚚</div>
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p>Your cravings satisfied in no time.</p>
          </div>
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-orange-500">🌱</div>
            <h3 className="text-xl font-bold">Eco-Friendly</h3>
            <p>Sustainable practices for a better tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
        </div>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
            <p className="italic">
              "Amazing quality and super fast delivery! Highly recommended."
            </p>
            <p className="mt-4 font-bold">- John Doe</p>
          </div>
          <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
            <p className="italic">
              "Freshest fruits I've ever had. Will definitely order again!"
            </p>
            <p className="mt-4 font-bold">- Jane Smith</p>
          </div>
          <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
            <p className="italic">
              "The variety of dishes is incredible and they taste amazing!"
            </p>
            <p className="mt-4 font-bold">- Alex Johnson</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="bg-orange-50 px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Team</h2>
        </div>
         <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto mb-4 h-24 w-24 rounded-full"
            />
            <h3 className="text-xl font-bold">Chef Emma</h3>
            <p>Head Chef</p>
          </div>
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto mb-4 h-24 w-24 rounded-full"
            />
            <h3 className="text-xl font-bold">Mike</h3>
            <p>Delivery Expert</p>
          </div>
          <div className="w-64 rounded-lg bg-white p-6 text-center shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto mb-4 h-24 w-24 rounded-full"
            />
            <h3 className="text-xl font-bold">Sarah</h3>
            <p>Quality Controller</p>
          </div>
        </div> 
      </section>*/}

      {/* Call to Action */}
      <section className="bg-orange-100 px-6 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Explore?</h2>
        <Link
          to={"/menu"}
          className="rounded-lg bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
        >
          Explore Our Menu
        </Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
