import './page.css'; 
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import logoCL from './asset/logo.png';
import kepsek from './asset/kepsek.png';
import logosmkn from './asset/logosmkn.png';
import rpl from './asset/rpl.png';
import tampilan from './asset/tampilan.png';


export function ButtonLink() {
  return (
    <Link href="./login" passHref>
      <Button className="nav-login-btn">Login</Button>
    </Link>
  );
}


export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <SambutanSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

// ========== COMPONENTS ==========

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        
        <Image 
          src={logoCL} 
          alt="Conduct Log Logo" 
          width={45} 
          height={30}
          priority
          className="logo-image"
        />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
      <ButtonLink />
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <header className="hero-section" id="home">
      {/* Background Image */}
      <div className="hero-background">
        <Image 
          src={tampilan}
          alt="SMKN 1 Cibinong Background"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1>WELCOME TO CONDUCT LOG</h1>
        <h2>SMKN 1 Cibinong</h2>
        <p>Bersama Junjung Tinggi Kedisiplinan</p>
      </div>
    </header>
  );
}

// Sambutan Section Component
function SambutanSection() {
  return (
    <section className="sambutan-section">
      <h2>Sambutan</h2>
      <div className="sambutan-container">
        <div className="photo-frame">
          <Image 
            src={kepsek} 
            alt="Kepala Sekolah SMKN 1 Cibinong" 
            width={180} 
            height={220}
            className="kepsek-photo"
          />
        </div>
        <div className="sambutan-text">
          <h3>
            Kepala Sekolah <br /> SMKN 1 Cibinong
          </h3>
          <p className="greeting">
            <em>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</em>
          </p>
          <p className="message">
            Melalui website resmi sekolah ini, kami memperkenalkan Kepala Sekolah kami,
            Sugiyo S.Pd, M.Pd., sebagai sosok pemimpin yang berdedikasi dalam
            memajukan pendidikan dan membangun generasi berkarakter. Beliau
            berkomitmen untuk menghadirkan lingkungan belajar yang aman, inovatif, dan
            berbasis teknologi.
          </p>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <p className="about-subtitle">
        Website ini dibuat untuk mempermudah pengelolaan pelanggaran siswa 
        dan meningkatkan transparansi dalam pencatatan nya.
      </p>

      <div className="info-cards">
        {/* Card 1 - Tim Kami */}
        <div className="card">
          <div className="card-icon-wrapper">
            <Image 
              src={logoCL} 
              alt="Tim Kami" 
              width={50} 
              height={50}
              className="card-icon"
            />
          </div>
          <div className="card-content">
            <h4>Tim Kami</h4>
            <p>Tim Selestio yang beranggotakan 3 orang:</p>
            <ul>
              <li>Afrieylah Panca</li>
              <li>Dahab Bagus Perkasa</li>
              <li>Naly Tri Desianti</li>
            </ul>
          </div>
        </div>

        {/* Card 2 - Jurusan Kami */}
        <div className="card">
          <div className="card-content">
            <h4>Jurusan Kami</h4>
            <p>Rekayasa Perangkat Lunak di SMKN 1 Cibinong</p>
          </div>
          <div className="card-icon-wrapper">
            <Image 
              src={rpl} 
              alt="Jurusan RPL" 
              width={50} 
              height={50}
              className="card-icon"
            />
          </div>
        </div>

        {/* Card 3 - Sekolah Kami */}
        <div className="card">
          <div className="card-icon-wrapper">
            <Image 
              src={logosmkn} 
              alt="SMKN 1 Cibinong" 
              width={50} 
              height={50}
              className="card-icon"
            />
          </div>
          <div className="card-content">
            <h4>Sekolah Kami</h4>
            <p>Sekolah Menengah Kejuruan Negeri 1 Cibinong</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  const contacts = [
    { icon: "📞", label: "Call Us", value: "+62 812-3456-7890" },
    { icon: "✉️", label: "Email Us", value: "conductlog@gmail.com" },
    { icon: "📍", label: "Visit Us", value: "SMKN 1 Cibinong" }
  ];

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <div className="contact-box" key={index}>
            <span className="icon">{contact.icon}</span>
            <div>
              <p className="label">{contact.label}</p>
              <p className="value">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}