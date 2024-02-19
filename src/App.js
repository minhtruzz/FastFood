//User
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./User/page/home-page";
import { DetailsPage } from "./User/page/details-page";
import { Login } from "./User/page/login";
import { Register } from "./User/page/register";
import { Payment } from "./User/page/payment";
import { MoMo } from "./User/page/momo";
function App() {

  return (
    <>
      {/* User */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details-page/:productId" element={<DetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/momo" element={<MoMo />} />
      </Routes>
    </>
  );
}

export default App;
