const formModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    zIndex            : 4,
    backgroundColor   : 'rgba(255, 255, 255, 0.35)'
  },
  content : {
    position                   : 'absolute',
    zIndex                     : 4,
    top                        : '100px',
    left                       : '50%',
    transform                  : 'translate(-50%)',
    width                      : '550px',
    height                     : '550px',
    border                     : '1px solid #ccc',
    background                 : '#eee',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

export default formModalStyle;
