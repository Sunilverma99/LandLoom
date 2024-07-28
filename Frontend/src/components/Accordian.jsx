import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-indigo-700 sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Here are some common questions about using LandLoom for property
                registration, NFT generation, and transactions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How do I register my property on LandLoom?"
              text="To register your property, create an account on LandLoom, then follow the step-by-step guide to submit your property details. Our system will generate an NFT for your property, which includes a unique ID issued by the government."
            />
            <AccordionItem
              header="What is the process for generating an NFT for my property?"
              text="Once you submit your property details, LandLoom will coordinate with the government to create an NFT with a unique ID. This process includes verifying property information and obtaining official registration."
            />
            <AccordionItem
              header="How do buyers purchase a property listed on LandLoom?"
              text="Buyers can browse listings and initiate a chat with the seller directly through LandLoom. If both parties agree on the deal, LandLoom will book a slot at the nearest government registry office to facilitate the NFT transfer."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Can I make changes to my property's NFT after it's created?"
              text="No, the NFT details cannot be altered once created. However, you can update the property listing information on LandLoom if needed. Any changes in ownership will be reflected through the transaction process."
            />
            <AccordionItem
              header="What happens if the buyer and seller cannot agree on a deal?"
              text="If an agreement is not reached, the property remains listed on LandLoom, and no transaction will be processed. Buyers and sellers are encouraged to communicate effectively to finalize the deal."
            />
            <AccordionItem
              header="How does LandLoom ensure the security of property transactions?"
              text="LandLoom uses secure encryption for all transactions and communications. Additionally, the platform coordinates with government authorities to ensure that NFT transfers are legitimate and properly documented."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-4 w-full">
      <div className="w-full rounded-lg bg-white p-4 shadow-md dark:bg-dark-2 dark:shadow-lg">
        <button
          className="flex w-full items-center justify-between text-left"
          onClick={handleToggle}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-white/10 dark:text-primary">
            <svg
              className={`fill-primary stroke-primary transition-transform duration-200 ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" />
            </svg>
          </div>

          <h4 className="text-lg font-semibold text-dark">{header}</h4>

          <span
            className={`transition-transform duration-200 ${
              active ? "rotate-180" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-current ${
                active ? "text-indigo-700" : "text-gray-500"
              }`}
            >
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </span>
        </button>

        <div
          className={`mt-4 transition-all duration-300 ease-in-out ${
            active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
