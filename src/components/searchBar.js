import React from 'react';

class SearchBar extends React.Component {
  state = {input: ''};

  onFormHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };
  render() {
    return (
      <div className="ui  massive category search">
        <form className="ui icon input" onSubmit={this.onFormHandler}>
          <input
            type="text"
            className="prompt"
            placeholder="Seatch for an Image"
            onChange={(e) => {
              this.setState({input: e.target.value});
            }}
            value={this.state.input}
          />
          <button
            onSubmit={this.onFormHandler}
            style={{
              borderRadius: '10px',
              border: 'none',
              background: 'white',
            }}
          >
            <i className="search small icon"></i>
          </button>
        </form>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
