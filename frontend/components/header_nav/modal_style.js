const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.35)'
  },
  content : {
    position                   : 'absolute',
    top                        : '100px',
    left                       : '50%',
    transform                  : 'translate(-50%)',
    width                      : '400px',
    height                     : '450px',
    border                     : '1px solid #ccc',
    background                 : '#eee',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    outline                    : 'none',
    padding                    : '0px',
    display :'flex'
  }
};

export default modalStyle;
