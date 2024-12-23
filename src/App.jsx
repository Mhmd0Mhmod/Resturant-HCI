import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import {
  AboutUsPage,
  CreateContainer,
  MainContainer,
  MenuPage,
  OrdersPage,
  ProtecteRoutes,
  ServicesPage,
  OrderDetails,
} from "./components";
import { store } from "./context/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to={"home"} replace />} />
              <Route path="home" element={<MainContainer />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="aboutus" element={<AboutUsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route element={<ProtecteRoutes />}>
                <Route path="orders" element={<OrdersPage />} />
                <Route path="createItem" element={<CreateContainer />} />
                <Route path="orders/:id" element={<OrderDetails />} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
        <Toaster position="top-center" />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
