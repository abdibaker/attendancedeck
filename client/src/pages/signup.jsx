import {AtSymbolIcon, LockClosedIcon} from "@heroicons/react/solid";
import {ArrowCircleRightIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";


const Signup = () => {
  return (
    <main className="bg-gray-100 grid place-content-center min-h-screen">
      <div className="flex sm:min-w-[24rem] flex-col bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-semibold self-center">Sign Up Now</h1>
        <p className="text-md self-center mt-4">
          Enter your credentials to get access account.
        </p>
        <form className="max-w-md mt-10">
          <label htmlFor="email" className="block label-text mb-2">
            E-Mail Address
          </label>
          <div className="relative">
            <div className="absolute top-0 left-0 inline-flex items-center w-10 h-full justify-center">
              <AtSymbolIcon className="h-6 w-6 text-primary"/>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered rounded-full w-full input-primary pl-10"
            />
          </div>
          <label htmlFor="email" className="block label-text mb-2 mt-8">
            Password
          </label>
          <div className="relative">
            <div className="absolute top-0 left-0 inline-flex items-center w-10 h-full justify-center">
              <LockClosedIcon className="h-6 w-6 text-primary"/>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-full w-full input-primary pl-10"
            />
          </div>
          <label
            htmlFor="confirmPassword"
            className="block label-text mb-2 mt-8"
          >
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute top-0 left-0 inline-flex items-center w-10 h-full justify-center">
              <LockClosedIcon className="h-6 w-6 text-primary"/>
            </div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered rounded-full w-full input-primary pl-10"
            />
          </div>
          <button className="btn rounded-full btn-primary mt-6 w-full">
            <span>SIGN UP</span>
            <span>
              <ArrowCircleRightIcon className="h-6 w-5 ml-2"/>
            </span>
          </button>
        </form>
      </div>
      <div className=" mt-8 grid place-content-center">
        <Link to={"/login"}>
          <span className="mr-2">Have an account?</span>
          <span className="text-primary hover:underline"> Login here</span>
        </Link>
      </div>
    </main>
  );
};

export default Signup;
