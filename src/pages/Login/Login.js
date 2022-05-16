import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-gray-900">
      <section className="flex flex-col w-3/12 y-4">
        <div className="m-5 text-6xl text-center">Login</div>
        <div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
          />
        </div>
        <div className="w-full my-3 text-lg duration-300 bg-transparent border-2 rounded-xl focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-transparent border-none outline-none focus:outline-none"
          />
        </div>
        <button class="rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 my-3">
          LOG IN
        </button>
      </section>
    </div>
  );
}

export default Login;
