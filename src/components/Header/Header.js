import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center py-5 header">
      <div className="py-5 my-5">
        <h1>Best food waiting for your belly</h1>
        <div>
          <form>
            <input type="text" name="" id="" />
            <button className="btn btn-primary ms-3">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
