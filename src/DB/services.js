import toast from "react-hot-toast";
import { supabase } from "./Supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  } else {
    return data;
  }
};
export const signUp = async ({ username, phone, email, password }) => {
  console.log(username, phone, email, password);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: username,
        phone: phone,
      },
    },
  });
  if (error) {
    throw error;
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

export const addFoodItem = createAsyncThunk(
  "food/AddFoodItem",
  async ({ data, onSuccess, onError }) => {
    data.imageURL = `${import.meta.env.VITE_SUPABASE_STORAGE}/${data.imageURL}`;
    const { error } = await supabase.from("Food").insert(data);
    if (error) {
      onError(error);
    } else {
      onSuccess();
    }
  },
);
export const getCateogry = async (category) => {
  const { data, error } = await supabase
    .from("Food")
    .select("*")
    .eq("category", category);
  if (error) {
    throw error;
  } else {
    return data;
  }
};

export const fetchFoodItems = createAsyncThunk(
  "food/fetchFoodItems",
  async () => {
    const { data, error } = await supabase.from("Food").select("*");

    if (error) {
      throw error;
    } else {
      return data;
    }
  },
);

export const checkoutOrder = createAsyncThunk(
  "cart/checkoutOrder",
  async ({ cart, userId, totalPrice }) => {
    const { data, error } = await supabase
      .from("Orders")
      .insert({ order: cart, userId, totalPrice });
    if (error) {
      throw error;
    } else {
      return data;
    }
  },
);

export const getOrders = async (userId, isAdmin) => {
  let query = supabase.from("Orders").select("*");
  if (!isAdmin) {
    query = query.eq("userId", userId);
  }
  const { data, error } = await query;
  if (error) {
    throw error;
  } else {
    return data;
  }
};

export const getOrder = async (orderId, id) => {
  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("id", orderId)
    .eq("userId", id)
    .single();
  console.log(data);

  if (error) {
    throw error;
  } else {
    return data;
  }
};

export const removeOrder = async (orderId, id) => {
  const { data, error } = await supabase
    .from("Orders")
    .delete()
    .eq("id", orderId)
    .eq("userId", id);
  if (error) {
    throw error;
  } else {
    return data;
  }
};
