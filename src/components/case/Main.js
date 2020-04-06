import React from 'react';
import './Main.scss';
import { connect } from 'react-redux';
import { getAllPokemon } from '../../actions/searchActions';
import routes from '../../routes';

class Main extends React.Component {
  componentDidMount() {
    this.props.onGetAllPokemon();
  };

  getParams = location => {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("pokemon") || ""
    };
  };

  render() {
    return (
      <main className="main-container">
        <div className="outer-container">
          <div style={{ padding: '10px 5px' }}>
            {routes(this.getParams)}
          </div>
        </div>
      </main>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onGetAllPokemon() {
    dispatch(
      getAllPokemon()
    )
  }
});

export default connect(null, mapDispatchToProps)(Main);