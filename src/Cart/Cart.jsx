import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Your Cart
        </h2>


        {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <span className="text-3xl">🛒</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-700">
              Your cart is empty
            </h3>           
          </div>
         
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-xl hover:shadow transition gap-4"
                >

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                      <img
                        src={item.img}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end sm:block">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-pink-500 hover:text-red-600 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <span className="text-gray-600 font-medium">Total:</span>
              <span className="text-xl font-bold">${total}</span>
            </div>

        
            <button onClick={() => removeFromCart("all")} className="mt-6 w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90 transition">
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;