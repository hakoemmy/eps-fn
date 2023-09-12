import React from 'react';
import classnames from 'classnames';

import './index.scss';

const Bullet = ({
  active,
  className,
  ...props
}) => {
  return <span
    className={classnames('bullet', className, { active })}
    {...props}
  />
}

export default Bullet;
