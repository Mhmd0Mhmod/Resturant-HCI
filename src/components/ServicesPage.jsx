// Import necessary libraries
import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center bg-blue-100 px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Experience top-notch services tailored to meet your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12 md:px-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">What We Offer</h2>
          <p className="text-lg text-gray-600">
            Explore our wide range of services designed for your convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">🚚</div>
            <h3 className="mb-2 text-xl font-bold">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly with our efficient delivery
              system.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">🍎</div>
            <h3 className="mb-2 text-xl font-bold">Fresh Produce</h3>
            <p className="text-gray-600">
              We ensure the freshest fruits and vegetables for your family.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">🍽️</div>
            <h3 className="mb-2 text-xl font-bold">Gourmet Dishes</h3>
            <p className="text-gray-600">
              Enjoy our carefully prepared gourmet meals for every occasion.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">🌱</div>
            <h3 className="mb-2 text-xl font-bold">Sustainable Practices</h3>
            <p className="text-gray-600">
              We care for the planet with our eco-friendly business model.
            </p>
          </div>
          {/* Service Card 5 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">💬</div>
            <h3 className="mb-2 text-xl font-bold">Customer Support</h3>
            <p className="text-gray-600">
              Our team is here to assist you 24/7 with any inquiries.
            </p>
          </div>
          {/* Service Card 6 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 text-4xl text-blue-500">🏪</div>
            <h3 className="mb-2 text-xl font-bold">Online Store</h3>
            <p className="text-gray-600">
              Browse and shop for your favorite items from the comfort of home.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-100 px-6 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <button className="rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default Services;
