
import { KeyRound } from "lucide-react";
import React from "react";
import ChangePassForm from "./_components/ChangePassForm";

export const metadata = {
  title: "Change your password"
}

const page = () => {
  return (
    <div>
      <header>
        <div className="font-semibold text-xl mb-2 flex items-center gap-2">
          Change Password <KeyRound />
        </div>
        <p className="mb-5 text-slate-500">
          Please enter your current password and a new password to update your
          credentials.
        </p>
        <hr />
      </header>
      <main className="mt-5">
        <ChangePassForm />
      </main>
    </div>
  );
};

export default page;
