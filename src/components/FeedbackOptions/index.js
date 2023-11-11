import css from './index.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button
      className={css.btn}
      key={el}
      type="button"
      value={el}
      onClick={() => onLeaveFeedback(el)}
    >
      {el}
    </button>
  ));
};

export default FeedbackOptions;
