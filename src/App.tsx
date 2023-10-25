import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":countryName" element={<SingleCountry />} />
        <Route path="/code/:countryCode" element={<SingleCountry />} />
      </Route>
    </Routes>
  );
}

export default App;
