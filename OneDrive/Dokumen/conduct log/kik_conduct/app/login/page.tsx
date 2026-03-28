"use client";

import "./login.css";
import Image from "next/image";
import logoCL from "../asset/logo.png";

export default function LoginPortal() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login diklik");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* Bagian Kiri: Form Login */}
        <div className="form-section">
          <div className="header">
            <div className="logo-container">
              <Image 
                src={logoCL} 
                alt="Logo" 
                className="main-logo"
                width={120}
                height={120}
              />
            </div>
            <div className="title-container">
              <h1>Conduct Log</h1>
              <p>Behavior Portal</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nisnip">NIS/NIP :</label>
              <input type="text" id="nisnip" placeholder="Masukkan NIS/NIP" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password :</label>
              <input type="password" id="password" placeholder="Masukkan Password" />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>

       
        {/* Bagian Kanan */}
<div className="decoration-section">
  
</div>

      </div>
    </div>
  );
}
