import classnames from 'classnames';

import './index.scss';

const Day = ({ children, hasBorder, className = '' }) => {
  return (
    <div className={classnames("day", className)}>
      <span
        className={classnames("separator",
          {
            "has-border": hasBorder,
          })}
      >
        {children}
      </span>
    </div>
  );
};

export default Day;
