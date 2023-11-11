import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total(good, neutral, bad) === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total(good, neutral, bad)}</p>
          <p>Positive feedback: {positivePercentage(good, neutral, bad)}%</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
