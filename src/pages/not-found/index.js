import React from 'react';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import noContent from 'assets/no-content.svg';
import './index.scss';

const NotFound = () => {
  const history = useHistory();

  return <div className="d-flex h-100 justify-content-center align-items-center flex-column not-found">
    <img src={noContent} alt="no content" />
    <h4 className="mt-2">Ooops , Content not found !</h4>
    <Button onClick={() => history.push('/')}>
       Back to Dashboard
    </Button>
  </div>
}

export default NotFound;
