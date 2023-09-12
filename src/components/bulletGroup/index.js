import React from "react";
import { range } from "lodash";
import Bullet from 'components/bullet';

const BulletGroup = ({
  number = 2,
  current,
  onClick = {},
  ...props
}) => {
  const bullets = range(0, number);
  return (
    <div className="bullet-group" {...props}>
      {bullets.map((item) => (
        <Bullet
          active={current === item}
          onClick={() => onClick(item)}
          className="mx-3"
        />
      ))}
    </div>
  );
};

export default BulletGroup;
