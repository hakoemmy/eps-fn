import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';

import Logger from 'services/logger';
import serverErrorIcon from 'assets/serverError.svg';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('Error:::',error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Logger.log(error, errorInfo)
  }

  refresh = () => {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return <div className={classnames("d-flex text-center h-100 justify-content-center align-items-center flex-column", {
        'vh-100': this.props.fullHeight
      })}>
      <img src={serverErrorIcon} alt="server error" />
      <h4>Internal Server Error</h4>
      <Button onClick={this.refresh}>
        Refresh
      </Button>
    </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary
