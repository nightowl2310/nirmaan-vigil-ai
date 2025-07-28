import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/indore.jpg';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, passcode, rememberMe });
    navigate('/report');
  };

  return (
    <>
      {/* MOBILE VIEW: Background image + form on top */}
      <div
        className="md:hidden min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full max-w-sm bg-[#f6f1eb]/90 rounded-lg p-6 border border-transparent hover:border-black transition-all duration-300">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-black text-center">Login</h2>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="username" className="text-sm text-left text-black">User Id:</label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="user id"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-b border-black outline-none text-black px-1 py-1"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="passcode" className="text-sm text-left text-black">Passcode:</label>
              <input
                id="passcode"
                type="password"
                placeholder="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="bg-transparent border-b border-black outline-none text-black px-1 py-1"
                required
              />
            </div>
            <div className="flex items-center gap-2 w-full text-sm text-black">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button
            onClick={()=>{navigate('/complain')}}
              type="submit"
              className="text-black border border-transparent px-4 py-2 mt-2 rounded hover:border-black hover:underline transition-all font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* DESKTOP VIEW: Split layout */}
      <div className="hidden md:flex h-screen w-full">
        {/* Left: Form */}
        <div className="w-1/2 flex items-center justify-center" style={{ backgroundColor: '#f6f1eb' }}>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg border border-transparent hover:border-black transition-all duration-300 max-w-sm w-full mx-4">
            <h2 className="text-xl font-semibold text-black">Login</h2>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="username" className="text-sm text-left text-black">User Id:</label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="user id"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-b border-black outline-none text-black px-1 py-1"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="passcode" className="text-sm text-left text-black">Passcode:</label>
              <input
                id="passcode"
                type="password"
                placeholder="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="bg-transparent border-b border-black outline-none text-black px-1 py-1"
                required
              />
            </div>
            <div className="flex items-center gap-2 w-full text-sm text-black">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button
            onClick={()=>{navigate('/complain')}}
              type="submit"
              className="text-black border border-transparent px-4 py-2 mt-2 rounded hover:border-black hover:underline transition-all font-semibold"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right: Full-height image that fills its side completely */}
        <div className="w-1/2 h-full">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
