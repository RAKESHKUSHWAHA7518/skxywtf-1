   import React, { useState } from 'react'
   


const PriceCard = ({ title, monthlyPrice, yearlyPrice, features, buttonLabel }) => {
  const [isYearly, setIsYearly] = useState(false); // Default to monthly pricing

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="border px-6 py-8 bg-gray-800 rounded-lg text-center">
      <h1 className="text-white font-bold text-xl mb-4">{title}</h1>
      <h2 className="text-white text-lg mb-4">{isYearly ? yearlyPrice : monthlyPrice}</h2>
      <ul className="text-white mb-6">
        {features.map((feature, index) => (
          <li key={index} className="p-2">✅ {feature}</li>
        ))}
      </ul >
      <div className='p-4 '>
      <button onClick={handleToggle} className="text-sm mb-4 m-3 text-white border border-white py-3 px-6 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 focus:outline-none focus:bg-white focus:text-gray-800">
         {isYearly ? 'Switch to Monthly' : 'Switch to Yearly'}
      </button>
      <button className="bg-gradient-to-r  m-3 from-indigo-500 to-purple-500 text-white py-3 px-8 rounded-md transition duration-300 ease-in-out hover:from-indigo-600 hover:to-purple-600 focus:outline-none">
        {buttonLabel}
      </button>
      </div>
    </div>
  );
};

  
 const Subscription = () => {

  const [isYearly, setIsYearly] = useState();

  const togglePricing = () => {
    setIsYearly(!isYearly);

  };

   return (
    <>
    

<div className="py-20 px-5 md:px-20 text-white bg-gray-900">
      <h1 className="text-center font-bold text-3xl md:text-5xl p-4">Choose Your Subscription</h1>
      <h2 className="text-center text-lg md:text-2xl p-4 font-semibold">
        Unlock the Intelligence, Freedom, and Power of Investing with SKXYWTF
      </h2>
      <div className="flex justify-center mb-8">
        <button onClick={togglePricing} className="bg-gray-700 text-white  rounded">
          {/* {isYearly ? "Switch to Monthly Pricing" : "Switch to Yearly Pricing"} */}
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-10 space-y-4 md:space-y-0 md:space-x-4">
        <PriceCard 
          title="Free Plan" 
            monthlyPrice="Free to Sign Up" 
          yearlyPrice="Free to Sign Up" 
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]} 
          buttonLabel="Get Started"
        />
        <PriceCard 
          title="Pro Plan" 
          monthlyPrice="$99 / Month" 
          yearlyPrice="$999 / Year" 
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]} 
          buttonLabel="Sign Up Now"
        />
        <PriceCard 
          title="Ultimate Plan" 
          monthlyPrice="$299 / Month" 
          yearlyPrice="$2999 / Year" 
          features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]} 
          buttonLabel="Join Today"
        />
      </div>
    </div>

     </>
   )
 }
 
  export default Subscription


  

 