var React      = require('react');
var Reflux     = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions    = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      image: {}
    }
  },
  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
  },
  render: function() {
    return <div>
      { this.state.image.title }
    </div>
  },
  onChange: function() {
    this.setState({
      image: ImageStore.find(this.props.params.id)
    });
  }
});
