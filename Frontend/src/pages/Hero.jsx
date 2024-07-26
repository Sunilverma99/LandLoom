import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 border-b">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-white sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            The Future of Real Estate
          </h2>
          <p className="mb-4">
            Discover a revolutionary platform where you can buy, list, and sell
            properties with ease. Experience the power of blockchain technology
            by selling your property as NFTs. Our platform offers a streamlined
            process that is both secure and transparent.
          </p>
          <p className="mb-4">
            Whether you're a buyer looking for your dream home, a seller wanting
            to list your property, or an investor interested in the latest real
            estate trends, we have the tools and expertise to help you succeed.
          </p>
          <p>
            Join us today and explore the many advantages our platform offers.
            From competitive pricing to a global marketplace, your real estate
            journey starts here.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="real estate 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="real estate 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
