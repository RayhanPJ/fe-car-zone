"use client";
import { fetcher } from "@/api";
import useSWR from "swr";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import API from "@/api";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error, mutate } = useSWR("/api/auth/me", fetcher);
  const { auth } = useAuth();

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/api/cms/user/profile/${auth.userId}`, formData);

      toast({
        title: "Profile updated successfully",
        variant: "success",
      });

      mutate();
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Failed to update profile",
        variant: "destructive",
      });
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setFormData({
        username: data?.data.username || "",
        email: data?.data.email || "",
        address: data?.data.address || "",
        phone_number: data?.data.phone_number || "",
      });
    }
  }, [data]);

  if (error) return <div>Failed to fetch profile</div>;
  if (isLoading) {
    return (
      <>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col gap-3 my-5">
              <Skeleton className={"w-1/2 sm:w-1/4 h-4"} />
              <Skeleton className={"w-full h-8"} />
            </div>
          ))}
      </>
    );
  }

  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="my-5 flex flex-col gap-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={formData.username}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="my-5 flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="my-5 flex flex-col gap-3">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="my-5 flex flex-col gap-3">
          <Label htmlFor="phone_number">Phone number</Label>
          <Input
            type="tel"
            id="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing && (
          <Button type="submit" className="my-5">
            Save Profile
          </Button>
        )}
      </form>
      {!isEditing && (
        <Button
          type="button"
          className="my-5"
          onClick={() => setIsEditing(true)}
        >
          Update Profile
        </Button>
      )}
    </div>
  );
};

export default Profile;
