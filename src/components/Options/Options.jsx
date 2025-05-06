import css from './Options.module.css';

const Options = ({ onFeedback, onReset, hasFeedback }) => (
  <div className={css.buttons}>
    <button onClick={() => onFeedback('good')}>Good</button>
    <button onClick={() => onFeedback('neutral')}>Neutral</button>
    <button onClick={() => onFeedback('bad')}>Bad</button>
    {hasFeedback && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;
