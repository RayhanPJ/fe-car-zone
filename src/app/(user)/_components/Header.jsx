import { Settings } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold flex gap-2 items-center">
            <Settings /> Setting
          </div>
          <p className=" text-slate-500 my-3">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
