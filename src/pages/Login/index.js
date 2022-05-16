import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="fixed p-3 m-3 rounded-lg">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="" />
        </Link>
      </div>
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
          <p className="my-3 text-lg text-center">
            <Link to="/reset">
              <p class="py-2 transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
                FORGOT PASSWORD?
              </p>
            </Link>
          </p>
          <p className="my-3 text-lg text-center">
            No account?
            <Link to="/registration">
              <p className="font-medium text-indigo-500 underline-offset-4 hover:underline">
                ...Create One
              </p>
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default Login;
