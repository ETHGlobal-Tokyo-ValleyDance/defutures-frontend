import ROUTES from "routes";
import Header from "components/header";
import Home from "pages/home";
import Hedge from "pages/hedge";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";

function App() {
  return (
    <main className="min-h-screen flex flex-col [&>div]:flex [&>div]:flex-1">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.HEDGE} element={<Hedge />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
