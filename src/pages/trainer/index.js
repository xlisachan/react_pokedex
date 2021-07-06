import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './sections/Header';
import Pokedex from './sections/Pokedex';

const Trainer = ({ trainer }) => (
  <section>
    <Header trainer={trainer} />
    <Pokedex trainer={trainer} />
  </section>
);

Trainer.propTypes = {
  trainer: PropTypes.object
};

const mapStateToProps = state => ({
  trainer: state.trainer
});
 
export default connect(mapStateToProps)(Trainer);
