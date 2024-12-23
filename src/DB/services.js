import toast from "react-hot-toast";
import { supabase } from "./Supabase";

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error("Error signing in with Google:", error.message);
  } else {
    return data;
  }
};

export const uploadImage = async (file) => {
  const fileExt = file.name.split(".").pop();
  const fileName =
    Math.random().toString().substring(7) +
    file.name?.split(".").slice(0, -1) +
    Math.random().toString().substring(7) +
    "." +
    fileExt;

  const { data, error } = await supabase.storage
    .from("Images")
    .upload(fileName, file);
  if (error) {
    throw error;
  } else {
    return data;
  }
};

export const deleteImage = async (imageURL) => {
  const fileName = imageURL.split("/").pop();
  console.log(fileName);

  const { data, error } = await supabase.storage
    .from("Images")
    .remove([fileName]);
  console.log(data);

  if (error) {
    console.error("Error deleting image:", error.message);
    throw error;
  } else if (data.length === 0) {
    throw new Error("Image not found:" + fileName);
  } else {
    console.log("Image deleted successfully:", fileName);
  }
};

export async function addFoodItem(data) {
  const { error } = await supabase.from("Food").insert(data);
  if (error) {
    throw error;
  }
}

export async function getFoodItems() {
  const { data, error } = await supabase.from("Food").select("*");
  if (error) {
    throw error;
  } else {
    return data;
  }
}
