import { useState } from "react";

const LoginForm = ({
  setAuthType,
}: {
  setAuthType: (p: "login" | "register") => void;
}) => {
  const switchToSignUp = () => {
    setAuthType("register");
  };

  return (
    <form
      action="/"
      className="w-[90%] flex flex-col justify-center items-center">
      <div className="flex items-center mb-5">
        <p className="font-prata text-3xl text-[#414141]">Login</p>
        <hr className="w-9 border-[1.25px] bg-black border-[#414141] ml-3 rounded-full" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full outline-none border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none border px-3 py-2"
        />
      </div>
      <div className="w-full flex justify-between mt-2">
        <p className="text-sm">Forgot your password?</p>
        <button className="text-sm cursor-pointer" onClick={switchToSignUp}>
          Create account
        </button>
      </div>
      <button
        type="submit"
        className="bg-black text-white px-9 py-2 mt-7.5 cursor-pointer">
        Sign In
      </button>
    </form>
  );
};

const SignUpForm = ({
  setAuthType,
}: {
  setAuthType: (p: "login" | "register") => void;
}) => {
  const switchToLogin = () => {
    setAuthType("login");
  };

  return (
    <form
      action="/"
      className="w-[90%] flex flex-col justify-center items-center">
      <div className="flex items-center mb-5">
        <p className="font-prata text-3xl text-[#414141]">Sign Up</p>
        <hr className="w-9 border-[1.25px] bg-black border-[#414141] ml-3 rounded-full" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <input
          type="nameName"
          placeholder="Email"
          className="w-full outline-none border px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full outline-none border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full outline-none border px-3 py-2"
        />
      </div>
      <div className="w-full flex justify-between mt-2">
        <p className="text-sm">Forgot your password?</p>
        <button className="text-sm cursor-pointer" onClick={switchToLogin}>
          Login Here
        </button>
      </div>
      <button
        type="submit"
        className="bg-black text-white px-9 py-2 mt-7.5 cursor-pointer">
        Sign Up
      </button>
    </form>
  );
};

const LoginPage = () => {
  const [authType, setAuthType] = useState<"login" | "register">("login");

  return (
    <main className="mx-[4%] flex justify-center items-center mt-[12vh]">
      {authType === "login" ? (
        <LoginForm setAuthType={setAuthType} />
      ) : (
        <SignUpForm setAuthType={setAuthType} />
      )}
    </main>
  );
};

export default LoginPage;
