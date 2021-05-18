import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Please, register to create a new account!</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <TextField
            style={styles.label}
            label="Name"
            variant="filled"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            style={styles.label}
            label="Email"
            variant="filled"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <TextField
            style={styles.label}
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
