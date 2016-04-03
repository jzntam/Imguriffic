var React        = require('react');
var Reflux       = require('reflux');
var Actions      = require('../actions');
var ImageStore   = require('../stores/image-store');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.params.id != this.props.params.id) {
      Actions.getImages(nextProps.params.id);
    }
  },
  render: function() {
    return <div>
      { this.renderImages() }
    </div>
  },
  onChange: function(event, images) {
    this.setState({images: images})
  },
  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return <ImagePreview key={ image.id } {...image} />
    });
  }
})
