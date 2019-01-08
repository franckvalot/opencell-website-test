var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var videoId = entry.getIn(['data', 'video']);
    return h('section', {className:'hero-1'},
      h('div', {className:"row justify-content-center"},
        h('div', {className:"col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9"},
          h('iframe', {className:"youtube", src:'https://www.youtube.com/embed/'+ videoId +'?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'},'')
        )
      )
    )
  }
})


var WhatWeProvideView = createClass({
  render: function(){
    var entry = this.props.entry;
    var content = entry.getIn(['data', 'content']);
    var image = entry.getIn(['data', 'image']);
    return h('section', {className:'hero-2'},
      h('div', {className:'container'},
        h('div', {className:'row align-items-center justify-content-center'},
          h('h1', {className:'col text-center'}, 'What we provide.')
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
    )
  }
})

var WhatMakesUsView = createClass({
  render: function(){
    var entry = this.props.entry;

    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col text-center'}, 'What makes us')
        ),
        h('div', {className:'row justify-content-center whatmakesus text-center'},
          h('div', {className:'col-8 col-md-4'},
            h('div', {className:'title-box text-center'}, entry.getIn(['data', 'title1'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_1_1'])),
            h('p', {}, entry.getIn(['data', 'text_1_1'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_1_2'])),
            h('p', {}, entry.getIn(['data', 'text_1_2'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_1_3'])),
            h('p', {}, entry.getIn(['data', 'text_1_3'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_1_4'])),
            h('p', {}, entry.getIn(['data', 'text_1_4'])),
          ),
          h('div', {className:'col-8 col-md-4'},
            h('div', {className:'title-box text-center'}, entry.getIn(['data', 'title2'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_2_1'])),
            h('p', {}, entry.getIn(['data', 'text_2_1'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_2_2'])),
            h('p', {}, entry.getIn(['data', 'text_2_2'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_2_3'])),
            h('p', {}, entry.getIn(['data', 'text_2_3'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_2_4'])),
            h('p', {}, entry.getIn(['data', 'text_2_4'])),
          ),
          h('div', {className:'col-8 col-md-4'},
            h('div', {className:'title-box text-center'}, entry.getIn(['data', 'title3'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_3_1'])),
            h('p', {}, entry.getIn(['data', 'text_3_1'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_3_2'])),
            h('p', {}, entry.getIn(['data', 'text_3_2'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_3_3'])),
            h('p', {}, entry.getIn(['data', 'text_3_3'])),
            h('h2', {}, entry.getIn(['data', 'subtitle_3_4'])),
            h('p', {}, entry.getIn(['data', 'text_3_4']))
          )
        )
      )
    )
  }
})


var MainIndustriesPreview = createClass({
  render: function(){
    var entry = this.props.entry;

    return h('section', {className:'hero-2'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col-12 text-center'}, 'Our main industries.'),
          h('div', {className:'w-100'},''),
          h('h2', {className:'col-12 col-md-8 col-lg-6'}, entry.getIn(['data', 'subtitle']))
        ),
        h('div', {className:'row justify-content-center'},
          h('div', {className:'col-8 col-md-5 col-lg-4 indus-telco'}, entry.getIn(['data', 'block1'])),
          h('div', {className:'col-8 col-md-5 col-lg-4 indus-energy'}, entry.getIn(['data', 'block2'])),
          h('div', {className:'col-8 col-md-5 col-lg-4 indus-mobility'}, entry.getIn(['data', 'block3'])),
          h('div', {className:'col-8 col-md-5 col-lg-4 indus-retail'}, entry.getIn(['data', 'block4']))
        )
      )
    )
  }

})

CMS.registerPreviewTemplate("paradigm", ParadigmPreview);
CMS.registerPreviewTemplate("whatweprovide", WhatWeProvideView);
CMS.registerPreviewTemplate("whatmakesus", WhatMakesUsView);
CMS.registerPreviewTemplate("mainindustries", MainIndustriesPreview);

CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/creative.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
