import { useState } from "react";
import {
  uploadImage as uploadImageAPI,
  deleteImage as deleteImageAPI,
  addFoodItem,
} from "../DB/services";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";

import Loader from "./Loader";
import { useForm } from "react-hook-form";

import { categories } from "../utils/data";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const CreateContainer = () => {
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const { register, handleSubmit, setValue, formState, reset } = useForm({
    defaultValues: {
      title: "",
      category: "other",
      price: "",
      imageURL: "",
      qty: 1,
    },
  });

  const { isSubmitting, isLoading } = formState;
  const loading = isSubmitting || isLoading || uploading;
  const uploadImage = async (e) => {
    setUploading(true);
    try {
      const file = e.target.files[0];
      const data = await uploadImageAPI(file);
      setValue("imageURL", data.fullPath);
      setImageAsset(
        `${import.meta.env.VITE_SUPABASE_STORAGE}/${data.fullPath}`,
      );
    } catch (error) {
      toast.error("Error uploading image" + error.message);
    }
    setUploading(false);
  };

  const deleteImage = async () => {
    const toastId = toast.loading("Deleting image...");
    try {
      await deleteImageAPI(imageAsset);
      setImageAsset(null);
      toast.success("Image deleted successfully", { id: toastId });
    } catch (error) {
      toast.error("Error deleting image" + error.message, { id: toastId });
    }
  };

  const onSubmit = async (data) => {
    const toastId = toast.loading("Adding food item...");
    dispatch(
      addFoodItem({
        data,
        onSuccess: () => {
          toast.success("Food item added successfully", { id: toastId });
          reset();
          setImageAsset(null);
        },
        onError: (error) => {
          toast.error("Error adding food item" + error.message, {
            id: toastId,
          });
        },
      }),
    );
  };
  const onError = () => {
    toast.error("Please fill all the fields");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/* Main container */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex w-[90%] flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-4 md:w-[50%]"
      >
        {/* Input fields and upload section */}
        <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            {...register("title", {
              required: "This field is required",
            })}
            placeholder="Give me a title..."
            className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Category dropdown */}
        <div className="w-full">
          <select
            id="category"
            onChange={(e) => setValue("category", e.target.value)}
            className="w-full cursor-pointer rounded-md border-b-2 border-gray-200 p-2 text-base outline-none"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="border-0 bg-white text-base capitalize text-headingColor outline-none"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        {/* Image upload section */}
        <div className="group flex h-225 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted border-gray-300 md:h-340">
          {uploading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="h-0 w-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 cursor-pointer rounded-full bg-red-500 p-3 text-xl outline-none transition-all duration-500 ease-in-out hover:shadow-md"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Input fields for calories and price */}
        <div className="flex w-full flex-col items-center gap-3 md:flex-row">
          <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
            <MdFoodBank className="text-2xl text-gray-700" />
            <input
              type="text"
              {...register("calories", {
                required: "This field is required",
                onChange: (e) =>
                  setValue("calories", e.target.value.replace(/\D/g, "")),
              })}
              placeholder="Calories"
              className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
            <MdAttachMoney className="text-2xl text-gray-700" />
            <input
              type="text"
              {...register("price", {
                required: "This field is required",
                onChange: (e) =>
                  setValue("price", e.target.value.replace(/\D/g, "")),
              })}
              placeholder="Price"
              className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Save button */}
        <div className="flex w-full items-center">
          <input
            type="submit"
            disabled={loading}
            className="ml-0 w-full rounded-lg border-none bg-emerald-500 px-12 py-2 text-lg font-semibold text-white outline-none disabled:cursor-not-allowed disabled:bg-gray-300 md:ml-auto md:w-auto"
            value={"Save"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateContainer;
