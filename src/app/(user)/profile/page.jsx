import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPen, UserRoundPen } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="">
      <header>
        <div className="font-semibold text-xl mb-3 flex items-center gap-1">
          Profile <UserRoundPen />
        </div>
        <p className="mb-5 text-slate-500">
          This is how others will see you on the site.
        </p>
        <hr />
      </header>
      <main className="mt-5">
        <form onSubmit={""}>
          <label className="form-control w-full max-w-2xl">
            <div className="label-text font-semibold mb-2">Name</div>
            <Input
              type="text"
              placeholder="Input Your Name"
              name="nama"
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </p>
          </label>
          <br />
          <label className="form-control w-full max-w-2xl">
            <div className="label-text font-semibold mb-2">Address</div>
            <Input
              type="text"
              placeholder="Input Your Address"
              name="alamat"
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              This is your address that will be displayed on your profile. Make
              sure to provide an accurate and reachable address.
            </p>
          </label>
          <Button className="btn mt-5" type="submit">
            <div className="loading loading-dots loading-xs">Submit</div>
          </Button>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
