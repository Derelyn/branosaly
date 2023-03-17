import Home from "./pages/home_page/Home";
import ExpenseTracker from "./pages/expense_tracker_app/ExpenseTrackerApp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expense_tracker" element={<ExpenseTracker />} />
      </Routes>
    </div>
  );
}

export default App;
