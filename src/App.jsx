import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import { AnimatePresence } from "motion/react";
import { Provider } from "react-redux";
import { store } from "./context/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AnimatePresence>
          <div className="flex h-auto w-screen flex-col bg-primary">
            <Header />
            <main className="mt-24 w-full p-8">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/createItem" element={<CreateContainer />} />
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
