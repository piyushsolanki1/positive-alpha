import React from "react";
import LandingPage from "./pages/LandingPage";
import StudentSuccess from "./components/StudentSuccess";
import Mentor from "./components/Mentor";
import CFACoursePage from "./components/CFACoursePage";
import DownloadGuide from "./components/DownloadGuide";
import Testimonials from "./components/Testimonials";
import CFADownloadSection from "./components/CFADownloadSection";
import StudentSection from "./components/StudentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <LandingPage />
      
      <StudentSuccess />
      <Mentor />
      <CFACoursePage/>
      <DownloadGuide/>
      <Testimonials />
      <CFADownloadSection />
      <StudentSection />
      <Footer />

    </div>
  );
}

export default App;

