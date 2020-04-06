import React from 'react';
import './Main.scss';
import routes from '../../routes';

class Main extends React.Component {
  getParams = location => {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("pokemon") || ""
    };
  };

  render() {
    return (
      <div className="main-container">
        <div className="outer-container">
          <div style={{ padding: '10px 5px' }}>
            {routes(this.getParams)}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;