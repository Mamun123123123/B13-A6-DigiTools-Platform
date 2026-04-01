import React from 'react'

const Ready_section = () => {
  return (
    <>
    <div className="pt-20 px-2">
      <div className="bg-blue-600 rounded-t-lg p-8 md:p-16 text-center text-white shadow-xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h2>

          <p className="text-purple-100 max-w-xl mx-auto text-lg">
            Join thousands of professionals using Digitools to work smarter.
            Start your free trial today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 hover:text-black">
              Explore Products
            </button>
            <button className="px-8 py-3 border border-white/50 text-white font-bold rounded-full hover:bg-white hover:text-black">
              View Pricing
            </button>
          </div>

          <p className="text-xs text-purple-200 opacity-80 pt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ready_section
