import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import * as selectors from '../../redux/phonebook/phonebook-selectors';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const styles = {
  input: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    width: 400,
  },
};

const Filter = ({ value, onChange }) => (
  <TextField
    style={styles.input}
    label="Find contacts by name"
    variant="filled"
    type="text"
    value={value}
    onChange={onChange}
  />
);
const mapStateToProps = state => ({ value: selectors.getFilter(state) });

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.filterChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
