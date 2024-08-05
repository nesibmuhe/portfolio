import React from 'react';
import './App.css';

const App = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    if (validateEmail(email) && message.trim() !== '') {
      window.location.href = `mailto:nesibmuhe@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}`;
    } else {
      alert('Please enter a valid email and message.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">ORTING</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Creative<br /><span>Ui/Ux Designer</span></h1>
          <button>My Services</button>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="Designer" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-image">
          <img src="https://via.placeholder.com/300" alt="Nesib Muhedin" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <h3>Hello! I’m Nesib Muhedin</h3>
          <p>Every great design begins with an even better story...</p>
        </div>
      </section>
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="https://github.com/nesibmuhe" target="_blank" rel="noopener noreferrer">Project 1</a></li>
          <li><a href="https://github.com/nesibmuhe" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          <li><a href="https://github.com/nesibmuhe" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default App;