import React from "react";

const Services = () => {
  return (
    <section className="w-full mx-auto py-12 bg-gradient-to-r from-blue-500 to-purple-400 text-gray-100">
      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-8 xs:gap-6 justify-center lg:items-stretch md:items-center mt-8">
        <div className="lg:w-[50%] xs:w-full">
          <img
            className="lg:rounded-xl sm:rounded-lg xs:rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Property"
          />
        </div>
        <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-800 text-gray-100 md:p-8 xs:p-6 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Effortless Property Registration
          </h2>
          <p className="text-lg leading-relaxed">
            With LandLoom, registering your property is a breeze. Our
            streamlined process and intuitive platform ensure that your property
            is registered efficiently with a government-issued NFT, providing
            you with security and peace of mind.
          </p>
        </div>
      </div>

      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-8 xs:gap-6 justify-center lg:items-stretch md:items-center mt-12">
        <div className="md:hidden sm:block xs:block xs:w-full">
          <img
            className="lg:rounded-xl sm:rounded-lg xs:rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="NFT Issuance"
          />
        </div>
        <div className="lg:w-[50%] xs:w-full bg-gray-800 text-gray-100 md:p-8 xs:p-6 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Secure NFT Issuance
          </h2>
          <p className="text-lg leading-relaxed">
            LandLoom partners with government authorities to issue a unique NFT
            for each property. This ensures that every transaction is secure,
            verifiable, and recorded on the blockchain.
          </p>
        </div>
        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
          <img
            className="lg:rounded-xl xs:rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="NFT Issuance"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
