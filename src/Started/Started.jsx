import React from 'react'
import img1 from "../assets/user.png"
import img2 from "../assets/package.png"
import img3 from "../assets/rocket.png"
const Started = () => {
    const steps = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required.",
    img: img1,
  },
  {
    id: "02",
    title: "Choose Tools",
    description: "Browse and select tools that match your workflow needs.",
    img: img2,
  },
  {
    id: "03",
    title: "Start Building",
    description: "Use tools instantly and boost your productivity.",
    img: img3,
  },
];
  return (
    <>
     <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative group">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 text-center hover:-translate-y-2 h-full">

              <div className="mx-auto w-20 h-20 mb-4 rounded-full bg-linear-to-r from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
            <div className="absolute top-4 right-4 bg-purple-800  text-white px-3 py-1 rounded-full text-base font-bold shadow-sm">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div> 
    </>
  )
}

export default Started
