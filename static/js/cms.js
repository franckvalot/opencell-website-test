var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var videoId = entry.getIn(['data', 'video']);
    return h('div', {className:"row justify-content-center"},
      h('div', {className:"col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9"},
        h('iframe', {className:"youtube", src:'https://www.youtube.com/embed/'+ videoId +'?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen}, )
      )
    )
  }
})

CMS.registerPreviewTemplate("paradigm", ParadigmPreview);
CMS.registerPreviewStyle("/css/cms.css");
