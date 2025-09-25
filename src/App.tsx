import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandscapingLayout } from "@/polymet/layouts/landscaping-layout";
import { HomePage } from "@/polymet/pages/home";

export default function IslandCreationsApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />

        <Route
          path="/home"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />

        <Route
          path="/services"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />

        <Route
          path="/about"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />

        <Route
          path="/portfolio"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <LandscapingLayout>
              <HomePage />
            </LandscapingLayout>
          }
        />
      </Routes>
    </Router>
  );
}
