import restaurantImage from "../imgs/logo.png";
import google from "../imgs/google.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, signInWithGoogle } from "../DB/services";
import { setUser } from "../context/slice";
import toast from "react-hot-toast";

const SignUp = () => {
  const { user } = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  function onSubmit(data) {
    const toastId = toast.loading("Signing up...");
    signUp(data)
      .then(() => {
        toast.success("Sign Up Successful", { id: toastId });
        reset();
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  }
  function onError(errors) {
    const errorValues = Object.values(errors);
    errorValues.forEach((error) => {
      if (error.type === "required") {
        toast.error(`${error.ref.name} is required`);
      }
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 font-sans">
      {/* Image Section */}
      <div className="mb-5 w-full max-w-xs">
        <img
          src={restaurantImage}
          alt="Restaurant"
          className="h-auto w-full rounded-lg shadow-md"
        />
      </div>

      {/* Sign-Up Form Section */}
      <div className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-md">
        <h2 className="mb-5 text-3xl font-bold tracking-wide text-gray-800">
          Sign Up
        </h2>
        <form className="mb-5" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full rounded-md border border-gray-300 p-4 text-lg"
              {...register("username", { required: true })}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-md border border-gray-300 p-4 text-lg"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Enter Phone"
              className="w-full rounded-md border border-gray-300 p-4 text-lg"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-md border border-gray-300 p-4 text-lg"
              {...register("password", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-gray-800 p-4 text-lg text-white shadow-sm transition-colors duration-300 hover:bg-orange-600"
          >
            Sign Up Now
          </button>
        </form>
        <button
          onClick={signInWithGoogle}
          className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border bg-white p-4 text-lg text-blue-500 shadow-md hover:bg-gray-100"
        >
          <img
            src={google}
            alt="Google logo"
            className="h-6 w-6 object-contain"
          />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
