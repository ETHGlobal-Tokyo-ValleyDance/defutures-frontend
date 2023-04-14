import Header from "components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "routes";
import Home from "pages/home";

function App() {
  return (
    <main className="min-h-screen flex flex-col [&>div]:flex [&>div]:flex-1">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
