import React from 'react';
import './Case.scss';
import Main from './Main';

const Case = () => (
  <div className="wrapper">
    <div className="case case-top">
      <div className="circle-black top-outer">
        <div className="circle-blue top-inner animated infinite pulse"></div>
      </div>
    </div>
    
    <Main />
    
    <div className="case case-bottom">
      <div className="circle-black bottom-outer">
        <div className="circle-blue bottom-inner animated infinite pulse"></div>
      </div>
    </div>
  </div>
);

export default Case;