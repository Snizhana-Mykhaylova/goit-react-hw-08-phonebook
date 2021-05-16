import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phonebook-actions.js';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addContact = (name, number) => (dispatch, getState) => {
  const contact = { name, number };
  dispatch(addContactRequest());
  const state = getState();
  const contacts = state.phonebook.contacts;
  const normalizedName = name.toLowerCase();
  if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
    alert(`${name} is already in contacts`);
    dispatch(fetchContactSuccess());
    return;
  }

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactError(err.message)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err.message)));
};

const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(err => dispatch(fetchContactError(err.message)));
};

// eslint-disable-next-line
export default {
  addContact,
  deleteContact,
  fetchContact,
};
