import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const highet = this.imageRef.current.clientHeight;
    const spans = Math.ceil(highet / 10);
    this.setState({spans: spans});
  };
  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `SPAN ${this.state.spans}`}}>
        <img src={urls.regular} ref={this.imageRef} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
