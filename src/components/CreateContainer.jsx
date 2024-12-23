// Import necessary libraries and components
import React, { useState } from "react"; // React and useState for managing state in functional components
import { motion } from "framer-motion"; // For animations and transitions

// Importing icons from "react-icons/md"
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";

// Importing helper data and components
import { categories } from "../utils/data"; // Categories for dropdown
import Loader from "./Loader"; // A loader component for showing loading state

// Main component
const CreateContainer = () => {
  // State declarations using useState
  const [title, setTitle] = useState(""); // Title of the food item
  const [calories, setCalories] = useState(""); // Calories of the food item
  const [price, setPrice] = useState(""); // Price of the food item
  const [category, setCategory] = useState(null); // Selected category
  const [imageAsset, setImageAsset] = useState(null); // Uploaded image
  const [fields, setFields] = useState(false); // Alert visibility toggle
  const [alertStatus, setAlertStatus] = useState("danger"); // Alert status (success or danger)
  const [msg, setMsg] = useState(null); // Alert message
  const [isLoading, setIsLoading] = useState(false); // Loading state for async operations
  //const [{ foodItems }, dispatch] = useStateValue(); // Global state with dispatch function

  // Function to handle image upload
  const uploadImage = (e) => {};

  // Function to delete the uploaded image
  const deleteImage = () => {};

  // Function to save item details
  const saveDetails = () => {};

  // Function to clear form data
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  // Function to fetch all food items
  // const fetchData = async () => {
  //   await getAllFoodItems().then((data) => {
  //     dispatch({
  //       type: actionType.SET_FOOD_ITEMS, // Set items in global state
  //       foodItems: data,
  //     });
  //   });
  // };

  // JSX for rendering the component
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/* Main container */}
      <div className="flex w-[90%] flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-4 md:w-[50%]">
        {/* Alert */}
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-lg p-2 text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        {/* Input fields and upload section */}
        <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Category dropdown */}
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
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
          {isLoading ? (
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
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex w-full items-center gap-2 border-b border-gray-300 py-2">
            <MdAttachMoney className="text-2xl text-gray-700" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="h-full w-full border-none bg-transparent text-lg text-textColor outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Save button */}
        <div className="flex w-full items-center">
          <button
            type="button"
            className="ml-0 w-full rounded-lg border-none bg-emerald-500 px-12 py-2 text-lg font-semibold text-white outline-none md:ml-auto md:w-auto"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
