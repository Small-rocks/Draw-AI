import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [positions, setPositions] = useState([
    { x: 200, y: 200 },
    { x: 200, y: 200 }
  ]);

  return (
    <div className="App">
      <header>
        <div className="line"></div>
        <nav className="navbar">
          <div style={{ fontFamily: "cursive", fontSize: "2rem" }}>Draw</div>
        </nav>
        <div className="line"></div>
      </header>
      <body className="body">
        <main>
          <h1 style={{ 
            fontFamily: "cursive", 
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)", 
            paddingTop: 60, 
            marginBottom: 0,
            padding: "60px 20px 0"
          }}>Hello! I am Draw! Ultimate AI</h1>
          <div className="amoeba-container">
            <svg viewBox="0 0 200 200" className="amoeba">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" 
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                </filter>
              </defs>
              <g filter="url(#goo)">
                <circle className="blob blob1" cx="100" cy="100" r="30" />
                <circle className="blob blob2" cx="100" cy="100" r="25" />
                <circle className="blob blob3" cx="100" cy="100" r="20" />
                <circle className="blob main-blob" cx="100" cy="100" r="35" />
              </g>
            </svg>
          </div>
          <div>
            <input 
              placeholder="Ask Anything..."
              className="custom-input"
              style={{
                width: "min(500px, 90%)", 
                height: 50, 
                borderRadius: 30,
                backgroundColor: "gray",
                borderWidth: 5, 
                borderColor: "white", 
                color: "white", 
                fontSize: "clamp(16px, 2vw, 20px)", 
                padding: "0 30px"
              }}
            />
          </div>
        </main>
        <style>{`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            background-color: #333;
            color: white;
          }
          .line {
            width: 100%;
            height: 1px;
            background-color: yellow;
          }
          .amoeba-container {
            width: 100%;
            height: min(50vh, 400px);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: 10px auto;
            padding: 0 20px;
          }
          .amoeba {
            width: min(200px, 100%);
            height: min(200px, 100%);
          }
          .blob {
            fill: yellow;
            animation-duration: 20s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          .main-blob {
            fill: yellow;
            animation: mainBlobMove 12s ease-in-out infinite;
          }
          .blob1 {
            animation: blob1Move 8s ease-in-out infinite;
          }
          .blob2 {
            animation: blob2Move 12s ease-in-out infinite;
            fill: yellow;
          }
          .blob3 {
            animation: blob3Move 10s ease-in-out infinite;
            fill: yellow;
          }
          .custom-input::placeholder {
            color: white;
            opacity: 0.7;
          }
          @keyframes mainBlobMove {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(10px, 15px) scale(1.1); }
            50% { transform: translate(-5px, -10px) scale(0.95); }
            75% { transform: translate(-15px, 5px) scale(1.05); }
          }
          @keyframes blob1Move {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -15px) scale(1.1); }
            66% { transform: translate(-15px, 12px) scale(0.9); }
          }
          @keyframes blob2Move {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-20px, 15px) scale(1.15); }
            66% { transform: translate(15px, -12px) scale(0.85); }
          }
          @keyframes blob3Move {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15px, 10px) scale(0.9); }
            66% { transform: translate(-12px, -15px) scale(1.1); }
          }
          @media (max-width: 768px) {
            .amoeba-container {
              height: min(40vh, 300px);
            }
          }
          @media (max-width: 480px) {
            .amoeba-container {
              height: min(35vh, 250px);
            }
          }
        `}</style>
      </body>
    </div>
  );
}