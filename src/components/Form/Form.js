import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactOperations from '../../redux/phonebook/phonebook-operations';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    width: 400,
  },

  input: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const number = this.state.number;
    const name = this.state.name;
    this.props.onSubmit(name, number);

    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <TextField
          style={styles.input}
          label="Name"
          variant="filled"
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />

        <TextField
          style={styles.input}
          label="Number"
          variant="filled"
          value={this.state.number}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(ContactOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
