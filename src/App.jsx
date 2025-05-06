import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

const getInitialFeedback = () => {
  const saved = localStorage.getItem('feedback');
  return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
};

const App = () => {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = type => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div
      style={{
        padding: '40px',
        maxWidth: '600px',
        margin: '40px auto',
        borderRadius: '16px',
        backgroundColor: '#ffffffdd',
        boxShadow: '0 0 12px #dda0dd',
        textAlign: 'center',
      }}
    >
      <h1>Sip Happens Café</h1>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        hasFeedback={total > 0}
      />
      {total > 0 ? (
        <Feedback feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
