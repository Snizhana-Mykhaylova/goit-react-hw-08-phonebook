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

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Please, log in if you already have an account!</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
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
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            {' '}
            Login
          </Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
