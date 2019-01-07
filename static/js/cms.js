var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var videoId = entry.getIn(['data', 'video']);
    return h('div', {}, videoId)
  }
})
