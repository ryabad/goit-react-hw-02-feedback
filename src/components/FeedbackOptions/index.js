// import css from './index.module.css';

import Button from './Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <Button
      // className={css.btn}
      key={el}
      type="button"
      value={el}
      onClick={() => onLeaveFeedback(el)}
    >
      {el}
    </Button>
  ));
};

export default FeedbackOptions;
