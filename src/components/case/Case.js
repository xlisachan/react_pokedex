import React from 'react';
import './Case.scss';
import routes from '../../routes';

const Case = () => (
  <div className="wrapper">
    <div className="case case-top">
      <div className="circle-black top-outer">
        <div className="circle-blue top-inner animated infinite pulse"></div>
      </div>
    </div>
    
    <div className="main-container">
      <div className="outer-container">
        <div style={{padding: '10px 5px'}}>
          {routes}
        </div>
      </div>
    </div>
    
    <div className="case case-bottom">
      <div className="circle-black bottom-outer">
        <div className="circle-blue bottom-inner animated infinite pulse"></div>
      </div>
    </div>
  </div>
);

export default Case;