import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUsPage,
  CreateContainer,
  Header,
  MainContainer,
  MenuPage,
  ProtecteRoutes,
  ServicesPage,
} from "./components";
import { store } from "./context/store";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<MainContainer />} />
              <Route path="menu" element=<MenuPage /> />
              <Route path="aboutus" element={<AboutUsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route
                path="createItem"
                element={
                  <ProtecteRoutes>
                    <CreateContainer />
                  </ProtecteRoutes>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
        <Toaster position="top-center" />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
