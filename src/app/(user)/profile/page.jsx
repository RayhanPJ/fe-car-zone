import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserRoundPen } from "lucide-react";
import React from "react";
import Profile from "../_components/Profile";

const ProfilePage = () => {
  return (
    <div className="">
      <header>
        <div className="font-semibold text-xl mb-3 flex items-center gap-1">
          Profile <UserRoundPen />
        </div>
        <hr />
      </header>
      <main className="mt-5">
        <Profile />
      </main>
    </div>
  );
};

export default ProfilePage;
