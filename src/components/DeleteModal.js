import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, DialogActions, Button } from '@material-ui/core';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '70%',
    lineHeight: 2
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: 'none',
  },
}));

const DeleteModal = ({ el, item, onClick = f => f }) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        onClick();
        setOpen(false);
    };

    return (
        <div>
            <div className="caughtmon-btn" onClick={handleOpen}>Caught</div>

            <Modal
                aria-labelledby={`${item}-modal`}
                aria-describedby={`content-modal`}
                open={open}>

                <div style={modalStyle} className={classes.paper}>
                    <h2 id={`${item}-modal`} style={{ fontSize: '11px', marginBottom: 5 }}>
                        {el.name} will be removed from your pokedex.
                    </h2>

                    <p id={`content-modal`} style={{ fontSize: '11px' }}>
                        You won't be able to undo this action.
                    </p>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button onClick={() => handleClick()} color="primary">
                            Delete {el.name}
                        </Button>
                    </DialogActions>
                </div>
            </Modal>
        </div>
    );
};

DeleteModal.propTypes = {
    el: PropTypes.object.isRequired,
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DeleteModal;