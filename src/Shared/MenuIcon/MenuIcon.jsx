import React from 'react';
import "./MenuIcon.css"; // Added semicolon

const MenuIcon = () => {
  return (
    <div className="bg-zinc-50/10 rounded-xl ring inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl p-3 transition-[transform, background-color] active:scale-95 ">
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default MenuIcon;
