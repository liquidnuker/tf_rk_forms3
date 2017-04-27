import React from "react";
import ReactDOM from "react-dom";

// form parts
// ======================================================/
function InputName(props) {
  return (
    <div>
    <label for="username">username</label>
    <input id="username"type={props.typez} value={props.valuez} onChange={props.onChangez} />
    </div>
  );
}

function InputEmail(props) {
  return (
    <div>
    <label for="email">email</label>
    <input id="email"type={props.typez} value={props.valuez} onChange={props.onChangez} />
    </div>
  );
}

// main form
// ======================================================/
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'user',
      email: 'email'
    };

    //
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // methods
  handleChange(event) {
    this.setState({
      user: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.user + "\n" + this.state.email );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>user: {this.state.user} email: {this.state.email}</p>
        <InputName typez="text" valuez={this.state.user} onChangez={this.handleChange} />
        <InputName typez="text" valuez={this.state.email} onChangez={this.handleChange2} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);