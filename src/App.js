import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
export default function App() {
  return (
    <div className="dark:bg-darkBg">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
