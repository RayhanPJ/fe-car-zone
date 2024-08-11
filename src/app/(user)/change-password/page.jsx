"use client";
import API from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // Import the useToast hook
import { signOutCookie } from "@/lib/server";
import { signOut } from "@/lib/auth";

const Page = () => {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const { toast } = useToast(); // Destructure toast from useToast

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const logOut = () => {
    signOutCookie();
    setTimeout(() => {
      signOut();
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.new_password === formData.confirm_password) {
      const data = {
        old_password: formData.old_password,
        new_password: formData.new_password,
      };
      try {
        const response = await API.post("api/auth/change-password", data);
        toast({
          title: "Success",
          description: "Password changed successfully!",
          variant: "success",
        });
        // Reset form fields
        setFormData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
        logOut();
      } catch (error) {
        toast({
          title: "Error",
          description:
            "The password you entered is incorrect. Please try again.",
          variant: "destructive",
        });
        console.error("Error changing password:", error);
      }
    } else {
      toast({
        title: "Error",
        description: "New password and confirmation do not match.",
        variant: "destructive",
      });
    }
  };

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
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-2xl">
            <div className="label-text font-semibold mb-2">Old Password</div>
            <Input
              type="password"
              placeholder="Enter old password"
              name="old_password"
              onChange={handleChange}
              value={formData.old_password}
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
              value={formData.new_password}
              onChange={handleChange}
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              Choose a new password that you haven't used before. Make sure it
              is strong and secure.
            </p>
          </label>
          <label className="form-control w-full max-w-2xl my-5">
            <div className="label-text font-semibold mb-2 mt-6">
              Confirm Password
            </div>
            <Input
              type="password"
              placeholder="Confirm new password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="input input-bordered input-md w-full max-w-sm"
            />
            <p className="text-xs text-slate-500 mt-2">
              Re-enter your new password to confirm.
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

export default Page;
