import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types'

const TooltipButton = ({
  icon,
  title,
  shape,
  type,
  placement,
  ...props
}) => {
  return (
    <Tooltip 
      title={title} 
      placement={placement}
     >
      <Button
        shape={shape}
        type={type}
        icon={icon}
        {...props}
      />
    </Tooltip>
  );
};

TooltipButton.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  shape: PropTypes.string,
  type: PropTypes.string
};

TooltipButton.defaultProps = {
  shape: 'circle',
  type: 'text'
}

export default TooltipButton;
