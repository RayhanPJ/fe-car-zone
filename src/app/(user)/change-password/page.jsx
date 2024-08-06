import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound } from "lucide-react";
import React from "react";

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
        <form>
          <label className="form-control w-full max-w-2xl">
            <div className="label-text font-semibold mb-2">Old Password</div>
            <Input
              type="password"
              placeholder="Enter old password"
              name="old_password"
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              Enter your current password to verify your identity.
            </p>
          </label>
          <br />
          <label className="form-control w-full max-w-2xl my-5">
            <div className="label-text font-semibold mb-2">New Password</div>
            <Input
              type="password"
              placeholder="Enter new password"
              name="new_password"
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              Choose a new password that you haven't used before. Make sure it
              is strong and secure.
            </p>
          </label>

          <Button className="btn mt-5" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default page;
