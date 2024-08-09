import React from "react";
import Header from "./_components/Header";
import Navbar from "@/components/common/Navbar";
import UserMenu from "./_components/UserMenu";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="p-10 main-container-lg">
        <Header />
        <div className="mt-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-fit">
              <UserMenu />
            </div>
            <main className="w-full main-container-lg">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
