import React from "react";
import Header from "./_components/Header";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-svh p-10">
        <Header />

        <div className="mt-5">
          <div className="hidden lg:flex gap-5">
            <div className="w-60 min-h-[70vh]">
              <ul className="gap-2 flex flex-col text-base font-medium">
                <Link href="/profile">
                  <li className="p-2 rounded-md dark:hover:text-black hover:bg-slate-100">
                    Profile
                  </li>
                </Link>
                <Link href="/change-password">
                  <li className="p-2 rounded-md dark:hover:text-black hover:bg-slate-100">
                    Change Password
                  </li>
                </Link>
                <Link href="/order-list">
                  <li className="p-2 rounded-md dark:hover:text-black hover:bg-slate-100">
                    Order List
                  </li>
                </Link>
                <Link href="/">
                  <li className="p-2 rounded-md mt-10 dark:hover:text-black hover:bg-slate-100">
                    Back
                  </li>
                </Link>
              </ul>
            </div>
            <main className="w-full main-container-lg">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
