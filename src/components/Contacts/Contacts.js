import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './contacts.module.css';
import operations from '../../redux/phonebook/phonebook-operations';
import * as selectors from '../../redux/phonebook/phonebook-selectors';

const phoneFormatter = require('phone-formatter');

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}:
          <span className={styles.number}>
            {phoneFormatter.format(contact.number, 'NNN-NN-NN')}
          </span>
          <button
            className={styles.button}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
