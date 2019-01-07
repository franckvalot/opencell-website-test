var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var videoId = entry.getIn(['data', 'video']);
    return h('div', {className:"row justify-content-center"},
      h('div', {className:"col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9"},
        h('iframe', {className:"youtube", src:'https://www.youtube.com/embed/'+ videoId +'?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'},'')
      )
    )
  }
})


var WhatWeProvideView = createClass({
  render: function(){
    var entry = this.props.entry;
    var content = entry.getIn(['data', 'content']);
    var image = entry.getIn(['data', 'image']);
    return h('div', {className:'container'},
      h('div', {className:'row align-items-center justify-content-center'},
        h('h1', {className:'col-12 text-center'}, 'What we provide.')
      ),
      h('div', {className:'row align-items-center justify-content-center'},
        h('div', {className:'col-12 col-md-8 col-lg-6'},
          h('img', {src:image, className:'img-fluid'})
        ),
        h('div', {className:'col-12 col-md-4 col-lg-6'},
          content,
          h('button', {type:'button', name:'button', className:'opencell-btn'}, 'DISCOVER')
        )
      )
    )
  }
})

CMS.registerPreviewTemplate("paradigm", ParadigmPreview);
CMS.registerPreviewTemplate("whatweprovide", WhatWeProvideView);
CMS.registerPreviewStyle("/css/cms.css");
