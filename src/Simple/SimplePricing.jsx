import React from 'react'

const SimplePricing = () => {
  return (
    <>
     <div className="bg-gray-50 py-10 px-4">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-4xl md:text-4xl font-bold lg:text-5xl text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-7xl mx-auto">
        <div className="flex-1 p-8 bg-white backdrop-blur-sm border border-gray-200 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-purple-100/50  space-y-7">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Starter</h2>
            <p className="text-gray-500">Perfect for getting started </p>
          </div>

          <h2 className="text-4xl font-black text-gray-900">
            $0 <span className="text-sm font-medium">/Month</span>
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">✓ Access to 10 free tools</li>
            <li className="flex items-center">✓ Basic templates</li>
            <li className="flex items-center">✓ Community support </li>
            <li className="flex items-center">✓ 1 project per month</li>
          </ul>

          <button className="mt-12 w-full py-3 bg-purple-800 hover:bg-purple-600 text-white font-bold rounded-full transition-colors">
            Get Started month
          </button>
        </div>

        <div className="  flex-1 p-8 bg-purple-600 backdrop-blur-sm border text-white border-gray-200 rounded-4xl shadow-sm hover:shadow-2xl  space-y-6">
          <div className="space-y-2 relative">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p className="text-purple-100">Best for professionals </p>
          </div>
          <div className="flex justify-center">
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 rounded-full px-4 py-1 text-sm text-yellow-700 font-semibold whitespace-nowrap">
              Most Popular
            </p>
          </div>

          <h2 className="text-4xl font-black text-white">
            $29 <span className="text-lg font-normal">/month</span>
          </h2>

          <ul className="space-y-3">
            <li className="flex items-center">✓ Access to 10 free tools</li>
            <li className="flex items-center">✓ Unlimited templates</li>
            <li className="flex items-center">✓ Priority support</li>
            <li className="flex items-center">✓ Unlimited projects</li>
            <li className="flex items-center">✓ Cloud sync</li>
            <li className="flex items-center">✓ Advanced analytics</li>
          </ul>

          <button className="w-full py-3 bg-white hover:bg-gray-100 text-purple-600 font-bold rounded-full transition-colors">
            Start Pro Trial
          </button>
        </div>
        <div className="flex-1 p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-4xl shadow-sm hover:shadow-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Enterprise</h2>
            <p className="text-gray-500">For teams and businesses </p>
          </div>

          <h2 className="text-4xl font-black text-gray-900">
            $99 <span className="text-lg font-normal">/month</span>
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">✓ Everything in Pro</li>
            <li className="flex items-center">✓ Team collaboration</li>
            <li className="flex items-center">✓ Custom integrations </li>
            <li className="flex items-center">✓ Dedicated support</li>
            <li className="flex items-center">✓ SLA guarantee</li>
            <li className="flex items-center">✓ Custom branding </li>
          </ul>

          <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-gray-200 font-bold rounded-full transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default SimplePricing
