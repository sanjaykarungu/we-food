import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="">
        <div className="flex justify-evenly mt-15 pt-15 pb-15">
          <div className="flex  gap-3 mt-10">
            <img
              className="w-12 h-12 rounded-2xl"
              src="https://cdn.dribbble.com/users/2898742/screenshots/5660488/logo.jpg"
              alt=""
            />
            <h1 className="text mt-1 font-bold text-3xl">We-Food</h1>
          </div>

          <div className="">
            <h1 className="font-bold text-2xl">Company</h1>
            <div className="mt-5 gap-5 grid">
              <p>About US</p>
              <p>Swiggy Corporate</p>
              <p>Careers</p>
              <p>Team</p>
              <p>Swiggy One</p>
              <p>Minis</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Contact US</h1>
            <div className="mt-5 gap-5 grid">
              <p>Help & Support</p>
              <p>Partner With US</p>
              <p>Ride With Us</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl">Legal</h1>
            <div className="mt-5 gap-5 grid">
              <p>Terms & Conditions</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl">Available in:</h1>
            <div className="mt-5 gap-5 grid">
              <p>Chennai</p>
              <p>Bangalore</p>
              <p>Mumbai</p>
              <p>Pune</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl">Life at Swiggy</h1>
            <div className="mt-5 gap-5 grid">
              <p>Explore With We-chai</p>
              <p>We-Cahi News</p>
              <p>Snackables</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl">Social Links</h1>
            <div className="w-25 h-25 gap-2 mt-5 flex">
              <p><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></p>
              <p><img src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png" alt="" /></p>
              <p><img src="https://cdn-icons-png.flaticon.com/128/14417/14417709.png" alt="" /></p>
              <p><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
