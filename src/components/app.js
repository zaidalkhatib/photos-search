import React from 'react';
import SearchBar from './searchBar';
import unsplash from '../api/unsplash';
import Imagelist from './imagelist';
import ImageList from './imagelist';
class App extends React.Component {
  state = {items: []};
  handleSubmit = async (input) => {
    const r = await unsplash.get('/search/photos', {
      params: {query: input},
    });

    this.setState({items: r.data.results});
  };

  render() {
    return (
      <div
        className="ui container"
        style={{lineHeight: 5, margin: '30px', textAlign: 'center'}}
      >
        <SearchBar onSubmit={this.handleSubmit} />

        <ImageList images={this.state.items} />
      </div>
    );
  }
}

export default App;
