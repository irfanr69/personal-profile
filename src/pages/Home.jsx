import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <>
      <header className="hero" style={{ minHeight: '50vh', paddingBottom: '0' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <span className="badge">Hello, I'm</span>
            <h1>Irfan Rizqulloh</h1>
            <p>Cloud & Automation Enthusiast | Linux Admin</p>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div className="about-layout">
              <div className="about-img-wrapper" style={{ maxWidth: '300px', margin: '0 auto' }}>
                <img src="./assets/profile.jpg" alt="Irfan Rizqulloh" className="about-img" />
                <div className="img-backdrop"></div>
              </div>
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  I'm a passionate Cloud & Automation Enthusiast with a proven track record of designing, 
                  deploying, and securing infrastructure. I specialize in Linux, Proxmox, and Ansible.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/about" className="btn-primary" style={{ display: 'inline-block' }}>
                    Read Full Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-card">
              <h2>Let's Connect</h2>
              <p className="contact-subtitle">I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
              
              <div className="contact-links">
                <p>
                  <span className="contact-icon"><Mail size={24} color="var(--accent-primary)" /></span>
                  <a href="mailto:irfrzq.user@gmail.com">irfrzq.user@gmail.com</a>
                </p>
                <p>
                  <span className="contact-icon"><FaGithub size={24} color="var(--accent-primary)" /></span>
                  <a href="https://github.com/irfanr69" target="_blank" rel="noopener noreferrer">github.com/irfanr69</a>
                </p>
                <p>
                  <span className="contact-icon"><FaLinkedin size={24} color="var(--accent-primary)" /></span>
                  <a href="https://linkedin.com/in/irfanrizqulloh" target="_blank" rel="noopener noreferrer">linkedin.com/in/irfanrizqulloh</a>
                </p>
              </div>
              
              <a className="btn-primary" href="./assets/cv.pdf" target="_blank">Download Resume</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
