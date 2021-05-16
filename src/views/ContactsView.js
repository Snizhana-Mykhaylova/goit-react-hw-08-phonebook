import React, { Component } from 'react';
import { connect } from 'react-redux';

import operations from '../redux/phonebook/phonebook-operations';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import * as selectors from '../redux/phonebook/phonebook-selectors';

import '../common.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className="containerApp">
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
        {this.props.isLoading && <h2>Loading ... </h2>}
        {this.props.isError && <h2>Something goes wrong :( </h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
  isError: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(operations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
