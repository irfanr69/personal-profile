import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

function About() {
  const experiences = [
    {
      id: 1,
      role: "Vulnerability Assessment Intern",
      company: "PT Bank CIMB Niaga Tbk",
      period: "October 2025 - April 2026",
      description: "Performed vulnerability scanning across enterprise applications and prepared structured reports for remediation. Evaluated CVE severity levels to prioritize critical patching and developed automated scripts that accelerated documentation workflows by 30%."
    },
    {
      id: 2,
      role: "Facilitator - Google Data Analytic Course",
      company: "Dicoding X Telkom",
      period: "October 2024 - February 2025",
      description: "Facilitated learning for 38 corporate participants in data analytics. Provided guidance and motivation that resulted in a 60% task completion rate, demonstrating strong leadership and communication skills."
    },
    {
      id: 3,
      role: "Data Visualization Intern",
      company: "PT Global Data Inspirasi",
      period: "June 2021 - October 2021",
      description: "Visualized COVID-19 data across Yogyakarta using Tableau. Created public dashboards featuring maps, bar charts, and line graphs after cleaning and transforming raw datasets for effective visualization."
    }
  ];

  const organizations = [
    {
      id: 1,
      role: "Staff, Election Day Volunteer (KPPS)",
      organization: "Purwokerto, Jawa Tengah",
      period: "December 2023 - February 2024",
      description: "Assisted in vote counting and reporting under strict time constraints. Collaborated with team members to maintain transparency and order."
    },
    {
      id: 2,
      role: "Database Monitoring",
      organization: "Traditional Games Return (TGR)",
      period: "September 2020 - January 2022",
      description: "Managed administrative data for 200 participants and 80 team members. Organized and monitored database operations for the 'Merdeka Bermain' event."
    },
    {
      id: 3,
      role: "Vice Chairman",
      organization: "Student Election Supervisory Board (Bawasra)",
      period: "March 2021 - October 2021",
      description: "Oversaw presidential election activities for the Student Executive Board."
    },
    {
      id: 4,
      role: "Media and Communication Staff",
      organization: "Sentral Kerohanian Islam (Rohis)",
      period: "June 2020 - June 2021",
      description: "Designed event posters and Islamic quotes using Adobe Illustrator and Photoshop. Mentored 18 students in Islamic Studies."
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified SysOps Administrator – Associate",
    "Google Cloud Certified Professional Cloud Architect",
    "Google Cloud Certified Professional Data Engineer",
    "EC-Council Certified Security Specialist v9",
    "CompTIA DataSys+ Certified",
    "Microsoft Certified – Power BI Data Analyst Associate",
    "GitHub Foundations Certification"
  ];

  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <h1>About Me</h1>
            <p>My journey, experience, and passion for technology.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                  src="./assets/profile.jpg" 
                  alt="Irfan Rizqulloh" 
                  style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--accent-primary)', marginBottom: '1.5rem', boxShadow: '0 15px 35px rgba(16, 185, 129, 0.25)', display: 'block', margin: '0 auto 1.5rem auto', filter: 'contrast(1.08) saturate(1.15) brightness(1.05)' }} 
                />
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Irfan Rizqulloh</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  I am a Computer Science graduate from Telkom University with a deep passion for cloud infrastructure, cybersecurity, and data analytics. 
                  My goal is to build secure, scalable solutions and leverage data to drive decisions. I have hands-on experience orchestrating infrastructure, assessing vulnerabilities, and crafting interactive dashboards.
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Professional Experience</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map(exp => (
                  <div key={exp.id} className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{exp.role}</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: '500' }}>{exp.company}</h4>
                      </div>
                      <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>{exp.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Leadership & Organizations</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {organizations.map(org => (
                    <div key={org.id} className="card" style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{org.role}</h3>
                          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: '500' }}>{org.organization}</h4>
                        </div>
                        <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {org.period}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>{org.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Education & Certifications</h2>
                <div className="card" style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={28} />
                    Bachelor of Computer Science
                  </h3>
                  <h5 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>Telkom University (GPA: 3.67) • Graduated Feb 2025</h5>
                  <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Thesis: Implementation of Ansible for Orchestrating Bastion Server in Demilitarized Zone.</p>
                  
                  <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Key Certifications:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {certifications.map((cert, index) => (
                      <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.05rem' }}>
                        <span style={{ color: 'var(--accent-secondary)' }}><CheckCircle2 size={20} /></span> 
                        <span style={{ color: 'var(--text-secondary)' }}>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
