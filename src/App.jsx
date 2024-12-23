import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { store } from "./context/store";
import OrderDetails from "./components/OrderDetails";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AnimatePresence mode="wait">
          <div className=" flex h-auto  flex-col bg-primary">
            <Header />
            <main className="mt-14 md:mt-20 w-full px-4 md:px-16 py-4">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/createItem" element={<CreateContainer />} />
                <Route path="/order-details" element={<OrderDetails />} />
              </Routes>
            </main>
          </div>
        </AnimatePresence>
        <Toaster position="top-center" />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
