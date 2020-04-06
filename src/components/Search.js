import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { pokeSearch } from '../actions/searchActions';
import { FaSearch } from 'react-icons/fa';

const renderInput = inputProps => {
  const { InputProps, classes, ref, onSubmit = f => f, ...other } = inputProps;

  return (
    <form
      style={{ display: 'flex', alignItems: 'center' }}
      className="search-form"
      onSubmit={onSubmit}>
      <FaSearch style={{ fontSize: '1rem', marginRight: 10 }} />

      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
          },
          disableUnderline: true,
          ...InputProps,
        }}
        {...other}
      />
    </form>

  );
};

renderInput.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

const renderSuggestion = suggestionProps => {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontFamily: "'Press Start 2P', sans-serif",
        fontSize: '.7rem',
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
};

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 30,
    right: 0
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
    fontFamily: "'Press Start 2P', sans-serif",
    fontSize: '.7rem',
    textTransform: 'uppercase'
  },
  divider: {
    height: theme.spacing(2),
  },
}));

const Search = ({ history, suggestions, onSearchPokemon = f => f }) => {
  let queryEl = React.useRef('');
  const classes = useStyles();

  const getSuggestions = (value, { showEmpty = false } = {}) => {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
      ? []
      : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
  };

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {

          const { onBlur, onFocus, onSubmit, ...inputProps } = getInputProps({
            placeholder: 'Search Pokedex',
            ref: input => queryEl = input,
            onSubmit: e => {
              e.preventDefault();

              onSearchPokemon(queryEl.value, history);
              queryEl.value = '';
            }
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps,
                onSubmit
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
};

const mapStateToProps = state => ({
  suggestions: state.search.universe,
});

const mapDispatchToProps = dispatch => ({
  onSearchPokemon(pokemon, history) {
    dispatch(
      pokeSearch(pokemon, history)
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));