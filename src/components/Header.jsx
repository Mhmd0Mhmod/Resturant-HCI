import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../context/slice";
import { signInWithGoogle } from "../DB/services";
import { supabase } from "../DB/Supabase";
import Avatar from "./../imgs/avatar.png";
import Logo from "./../imgs/logo.png";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.state.user);
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      dispatch(setUser(user));
    };
    getUser();
  }, [dispatch]);
  const login = () => {
    if (!user) {
      signInWithGoogle();
    } else {
      setIsMenu(!isMenu);
    }
  };
  const avatar_url = user?.user_metadata?.avatar_url || Avatar;
  const id = user?.id;
  const isAdmin = import.meta.env.VITE_SUPABASE_ADMINS.includes(id);
  console.log(isAdmin);

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* desktop and tablet size */}
      <div className="hidden h-full w-full items-center justify-between md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Home
            </li>
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Menu
            </li>
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              About Us
            </li>
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="cursor-pointer text-2xl text-textColor" />
            <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg">
              <p className="text-xs font-semibold text-white">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={avatar_url}
              alt="user"
              className="h-10 min-h-[40px] w-10 min-w-[40px] cursor-pointer rounded-full drop-shadow-xl"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 top-12 flex w-40 flex-col rounded-lg bg-primary shadow-xl"
              >
                {isAdmin && (
                  <Link to={"/createItem"}>
                    <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100"
                  // onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile size */}
      <div className="flex h-full w-full items-center justify-between md:hidden">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="cursor-pointer text-2xl text-textColor" />
          <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg">
            <p className="text-xs font-semibold text-white">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar_url}
            alt="user"
            className="h-10 min-h-[40px] w-10 min-w-[40px] cursor-pointer rounded-full drop-shadow-xl"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute right-0 top-12 flex w-40 flex-col rounded-lg bg-primary shadow-xl"
            >
              {isAdmin && (
                <Link to={"/createItem"}>
                  <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li className="cursor-pointer px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100 hover:text-headingColor">
                  Home
                </li>
                <li className="cursor-pointer px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100 hover:text-headingColor">
                  Menu
                </li>
                <li className="cursor-pointer px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100 hover:text-headingColor">
                  About Us
                </li>
                <li className="cursor-pointer px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-100 hover:text-headingColor">
                  Service
                </li>
              </ul>
              <p
                className="m-2 flex cursor-pointer items-center justify-center gap-3 rounded-md bg-gray-200 p-2 text-base text-textColor shadow-md transition-all duration-100 ease-in-out hover:bg-gray-300"
                // onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
