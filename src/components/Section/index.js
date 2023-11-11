import css from './index.module.css';

const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
