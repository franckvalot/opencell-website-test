var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var video = entry.getIn(['data', 'video']);
    return h('div', {},
      h('h1', {}, entry.getIn(['data', 'title'])),
        h('img', {src: "test"}),
          h('div', {"className": "text"}, this.props.widgetFor('body'))
    )
  }

})
