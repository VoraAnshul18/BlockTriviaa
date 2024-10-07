import React, { useState, useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Quiz = () => (
  <div>
    <h4>Quiz Component Placeholder</h4>
    <p>Replace with your actual quiz implementation</p>
  </div>
);

const Landing = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    if (window.solana) {
      window.solana.on("connect", () => {
        const address = window.solana.publicKey.toString();
        setWalletAddress(shortenAddress(address));
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      const mockAddress = "5KN8G...7PJ9";
      setWalletAddress(mockAddress);
    } catch (err) {
      console.log(err);
    }
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  const handleRegister = (quizId) => {
    setSelectedQuiz(quizId);
  };

  const navStyles = {
    nav: {
      width: '100%',
      backgroundColor: '#0a0a0a',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '0 16px',
    },
    innerNav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
    },
    logo: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    linksContainer: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'flex',
        alignItems: 'center',
      },
    },
    link: {
      color: '#d1d5db',
      marginRight: '48px',
      transition: 'color 0.3s',
      textDecoration: 'none',
    },
    button: {
      backgroundColor: '#6a0dad',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'background-color 0.3s',
      cursor: 'pointer',
      border: 'none',
    },
  };

  const Navbar = () => (
    <nav style={navStyles.nav}>
      <div style={navStyles.container}>
        <div style={navStyles.innerNav}>
          <div style={{ flexShrink: 0 }}>
            <h1 style={navStyles.logo}>Quiz App</h1>
          </div>
          
          <div style={navStyles.linksContainer}>
            <a href="#" style={navStyles.link}>Home</a>
            <a href="#" style={navStyles.link}>About Us</a>
          </div>

          <button
            onClick={connectWallet}
            style={navStyles.button}
          >
            {walletAddress ? walletAddress : "Connect Wallet"}
          </button>
        </div>
      </div>
    </nav>
  );

  const quizCardStyles = {
    card: (isMain) => ({
      backgroundColor: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      maxWidth: isMain ? '28rem' : '20rem',
      margin: isMain ? '0 auto 3rem' : '0',
      transition: 'transform 0.3s, box-shadow 0.3s',
      border: '6px solid transparent',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 30px -5px rgba(179,136,255,0.7)',
        borderColor: '#b388ff',
      },
    }),
    content: {
      padding: '1.5rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#6a0dad',
    },
    prizeContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    trophy: {
      color: '#eab308',
      marginRight: '0.5rem',
      height: '24px',
      width: '24px',
    },
    prizeAmount: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#6a0dad',
    },
    prizeText: {
      color: '#1f2937',
      marginLeft: '0.5rem',
    },
    dateContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#4b5563',
      marginBottom: '1rem',
    },
    button: {
      width: '100%',
      backgroundColor: '#6a0dad',
      color: 'white',
      padding: '0.5rem 0',
      borderRadius: '0.5rem',
      transition: 'background-color 0.3s',
      cursor: 'pointer',
      border: 'none',
    },
  };

  const QuizCard = ({ title, date, time, onClick, isMain = false }) => (
    <div style={quizCardStyles.card(isMain)}>
      <div style={quizCardStyles.content}>
        <h3 style={quizCardStyles.title}>{title}</h3>
        <div style={quizCardStyles.prizeContainer}>
          <FaTrophy style={quizCardStyles.trophy} />
          <span style={quizCardStyles.prizeAmount}>10 USDC</span>
          <span style={quizCardStyles.prizeText}>Prize Pool</span>
        </div>
        <div style={quizCardStyles.dateContainer}>
          <div>
            <p style={{ fontWeight: '600' }}>{date}</p>
            <p>{time}</p>
          </div>
        </div>
        <button
          style={quizCardStyles.button}
          onClick={onClick}
        >
          {isMain ? 'Join Now' : 'Register Now'}
        </button>
      </div>
    </div>
  );

  const pageStyles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      overflow: 'hidden',
    },
    background: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
    },
    gradient1: {
      height: '100%',
      background: 'linear-gradient(to bottom, #0a0a0a, transparent)',
      opacity: 0.4,
    },
    gradient2: {
      height: '100%',
      background: 'linear-gradient(to right, #b388ff, transparent)',
      opacity: 0.3,
      transform: 'rotate(45deg) translateX(-50%) translateY(25%)',
      backgroundSize: '200% 200%',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
    },
    heading: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#6a0dad',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      '@media (min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
  };

  const formStyles = {
    container: {
      maxWidth: '32rem',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      color: '#374151',
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      color: '#374151',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      outline: 'none',
    },
  };

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.background}>
        <div style={pageStyles.gradient1}></div>
        <div style={pageStyles.gradient2}></div>
      </div>

      <Navbar />

      <div style={pageStyles.content}>
        <h2 style={pageStyles.heading}>Today's Quiz</h2>
        
        {selectedQuiz === "general-knowledge" ? (
          <div style={{ ...quizCardStyles.card(true), padding: '1.5rem' }}>
            <Quiz />
          </div>
        ) : (
          <QuizCard
            title="General Knowledge Quiz"
            date="Sep 28, 2024"
            time="8:00 PM"
            onClick={() => handleRegister("general-knowledge")}
            isMain={true}
          />
        )}

        <h2 style={{ ...pageStyles.heading, marginTop: '1.5rem' }}>Upcoming Quizzes</h2>
        
        <div style={pageStyles.grid}>
          {[
            { id: "science-tech", title: "Science & Tech Quiz", date: "Oct 1, 2024", time: "7:00 PM" },
            { id: "history", title: "History Quiz", date: "Oct 5, 2024", time: "6:00 PM" },
            { id: "math", title: "Math Quiz", date: "Oct 10, 2024", time: "5:00 PM" }
          ].map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              date={quiz.date}
              time={quiz.time}
              onClick={() => handleRegister(quiz.id)}
            />
          ))}
        </div>

        <h2 style={{ ...pageStyles.heading, marginTop: '3rem' }}>Create a Quiz</h2>
        <div style={formStyles.container}>
          <form>
            {[
              { id: 'quiz-title', label: 'Quiz Title', type: 'text', placeholder: 'Enter quiz title' },
              { id: 'quiz-date', label: 'Date', type: 'date' },
              { id: 'quiz-time', label: 'Time', type: 'time' },
              { id: 'quiz-prize', label: 'Prize', type: 'text', placeholder: 'Enter prize (e.g., 10 USDC)' }
            ].map((field) => (
              <div key={field.id} style={formStyles.formGroup}>
                <label style={formStyles.label} htmlFor={field.id}>
                  {field.label}
                </label>
                <input
                  style={formStyles.input}
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <button style={{ ...quizCardStyles.button, marginTop: '1rem' }}>
              <a href='/dashboard'>Create Quiz</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;