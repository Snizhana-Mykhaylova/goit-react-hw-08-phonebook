import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import * as selectors from '../../redux/phonebook/phonebook-selectors';

import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
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
