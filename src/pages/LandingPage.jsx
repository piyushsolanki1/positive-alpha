// import React from "react";
// import "../styles/landing.css";
// import heroImg from "../assets/images.png";


// function LandingPage() {
//   return (
//     <div className="landing">

//       {/* ===== Navbar ===== */}
//       <header className="navbar">
//         <div className="logo">⭐ Positive Alpha</div>
//         <nav className="nav-links">
//           <a href="#">About</a>
//           <a href="#">Why</a>
//           <a href="#">CFA</a>
//           <a href="#">Contact us</a>
//         </nav>
//       </header>

//       {/* ===== Hero Section ===== */}
//       <section className="hero">
//         <div className="hero-left">
//           <img src={heroImg} alt="Teaching" />
//         </div>
//         <div className="hero-right">
//           <h2>
//             Our Teaching methods won’t let your Interest depreciate in your CFA
//             exam!
//           </h2>
//           <p>
//             Not sure if our Teaching style will fit you?{" "}
//             <b>Let’s have a Vibe Test</b>, because our Vibe Hits different, So as
//             our Teaching style & Method
//           </p>
//           <button className="vibe-btn">Vibe Check!</button>
//         </div>
//       </section>

//       {/* ===== Confusion Section ===== */}
//       <section className="confusion">
//         <h2>
//           Sir, I have a little Confusion, because:
//         </h2>
//         <div className="confusion-cards">
//           <div className="card">
//             <p>
//               I am not sure if <b>CFA</b> is a right career option for me.
//             </p>
//             <span>
//               Our Counseling sessions got you covered,
//             </span>
//           </div>
//           <div className="card">
//             <p>
//               I am worried about the big <b>Time & Money Investment!</b>
//             </p>
//             <span>
//               Just join one class, don’t pay for the whole course, until you feel Confident.
//             </span>
//           </div>
//           <div className="card">
//             <p>
//               I want to test the <b>Teaching style!</b>
//             </p>
//             <span>
//               We have the Demo Classes to know our Teaching style,
//             </span>
//           </div>
//         </div>

        
//       </section>
//     </div>



//   );
// }

// export default LandingPage;



import React from "react";
import "../styles/landing.css";
import heroImg from "../assets/hero3.jpg";

function LandingPage() {
  return (
    <div className="landing">

      {/* ===== Navbar ===== */}
      <header className="navbar">
        <div className="logo">⭐ Positive Alpha</div>
        <nav className="nav-links">
          <a href="#">About</a>
          <a href="#">Why</a>
          <a href="#">CFA</a>
          <a href="#">Contact us</a>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-left">
          <img src={heroImg} alt="Teaching" />
        </div>
        <div className="hero-right">
          <h2>
            Our Teaching methods won’t let your Interest depreciate in your CFA
            exam!
          </h2>
          <p>
            Not sure if our Teaching style will fit you?{" "}
            <b>Let’s have a Vibe Test</b>, because our Vibe Hits different, So as
            our Teaching style & Method
          </p>
          <button className="vibe-btn">Vibe Check!</button>
        </div>
      </section>

      {/* ===== Confusion Section ===== */}
      <section className="confusion">
        <h2>
          Sir, I have a little Confusion, because:
        </h2>
        <div className="confusion-cards">
          <div className="card">
            <p>
              I am not sure if <b>CFA</b> is a right career option for me.
            </p>
            <span>
              Our Counseling sessions got you covered,
            </span>
          </div>
          <div className="card">
            <p>
              I am worried about the big <b>Time & Money Investment!</b>
            </p>
            <span>
              Just join one class, don’t pay for the whole course, until you feel Confident.
            </span>
          </div>
          <div className="card">
            <p>
              I want to test the <b>Teaching style!</b>
            </p>
            <span>
              We have the Demo Classes to know our Teaching style,
            </span>
          </div>
        </div>

        {/* ===== Book Demo Button ===== */}
        <div className="book-demo-container">
          <button className="book-demo-btn">Book Demo!</button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
