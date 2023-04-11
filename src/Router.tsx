import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Posts } from "./pages/Posts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
