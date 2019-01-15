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

var HeaderPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var carousel = entry.getIn(['data', 'carousel']);
    var carouselIndicator = function(item, index){
      if(index==0) return h('li', {className: 'active', 'data-target':'"#carouselHeader', 'data-slide-to':index}, '');
      else return h('li', {'data-target':'"#carouselHeader', 'data-slide-to':index}, '');
    }
    var carouselInner = function(item, index){
      if(index==0) return h('div', {className:'carousel-item active'}, "Active" + index );
      else return h('div', {className:'carousel-item'}, "Innactive" + index );
    }

    return h('header', {className:'hero'},
      h('div', {className:'header-content-inner'},
        h('div', {id:'carouselHeader', className:'carousel slide row align-items-center', 'data-ride':'carousel'},
          h('ol', {className:'carousel-indicators'},
            carousel.map(carouselIndicator)
          ),
          h('div', {className:'carousel-inner'},
            carousel.map(carouselInner);
          ),
          h('a', {className:'carousel-control-prev', href:'#carouselHeader', role:'button', 'data-slide':'prev'},
            h('span', {className:'carousel-control-prev-icon', 'area-hidden':'true'}, ''),
            h('span', {className:'sr-only'}, 'Previous'),
          ),
          h('a', {className:'carousel-control-next', href:'#carouselTestimonials', role:'button', 'data-slide':'next'},
            h('span', {className:'carousel-control-next-icon', 'area-hidden':'true'}, ''),
            h('span', {className:'sr-only'}, 'Next'),
          )
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
            h('p', {}, content),
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


var OurCustomersPreview = createClass({
  render: function(){
    var entry = this.props.entry;

    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row align-items-center justify-content-center'},
          h('h1', {className:'col-12 text-center'}, 'Our Customers.')
        ),
        h('div', {className:'row align-items-center justify-content-center customer-logo'},
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt1']), src:entry.getIn(['data', 'logo1'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt2']), src:entry.getIn(['data', 'logo2'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt3']), src:entry.getIn(['data', 'logo3'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt4']), src:entry.getIn(['data', 'logo4'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt5']), src:entry.getIn(['data', 'logo5'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt6']), src:entry.getIn(['data', 'logo6'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt7']), src:entry.getIn(['data', 'logo7'])})
          ),
          h('div', {className:'col-6 col-md-4 col-lg-3'},
            h('img', {className:'img-fluid', alt:entry.getIn(['data', 'alt8']), src:entry.getIn(['data', 'logo8'])})
          )
        ),
        h('div', {className:'row align-items-center justify-content-center text-center'},
          h('div', {className:'col'},
            h('button', {className:'opencell-btn', name:'button', type:'button'}, 'DISCOVER OUR CUSTOMERS')
          )
        )
      )
    )
  }
})

var WorkTogetherPreview = createClass({
  render: function(){
    var entry = this.props.entry;

    return h('section', {className:'hero-2'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center text-center'},
          h('h1', {className:'col-12 text-center'}, 'We work together'),
          h('div', {className:'w-100'},''),
          h('h2', {className:'col-12 col-md-8 col-lg-6'}, 'TESTIMONIALS')
        ),
        h('div', {id:'carouselTestimonials', className:'carousel slide', 'data-ride':'carousel'},
          h('ol', {className:'carousel-indicators'},
            h('li', {className: 'active', 'data-target':'"#carouselTestimonials', 'data-slide-to':'0'}, ''),
            h('li', {'data-target':'"#carouselTestimonials', 'data-slide-to':'1'}, ''),
            h('li', {'data-target':'"#carouselTestimonials', 'data-slide-to':'2'}, '')
          ),
          h('div', {className:'carousel-inner testimonials'},
            h('div', {className:'carousel-item active'},
              h('div', {className:'row justify-content-center align-items-center'},
                h('div', {className:'col-10 col-md-8 col-lg-6'},
                  h('div', {className:'row justify-content-center'},
                    h('div', {className:'quote text-center'}, entry.getIn(['data', 'testimonial1'])),
                    h('div', {className:'w-100'},''),
                    h('hr', {}),
                    h('div', {className:'w-100'},''),
                    h('div', {className:'author'}, entry.getIn(['data', 'author1']))
                  )
                )
              )
            ),
            h('div', {className:'carousel-item'},
              h('div', {className:'row justify-content-center align-items-center'},
                h('div', {className:'col-10 col-md-8 col-lg-6'},
                  h('div', {className:'row justify-content-center'},
                    h('div', {className:'quote text-center'}, entry.getIn(['data', 'testimonial2'])),
                    h('div', {className:'w-100'},''),
                    h('hr', {}),
                    h('div', {className:'w-100'},''),
                    h('div', {className:'author'}, entry.getIn(['data', 'author2']))
                  )
                )
              )
            ),
            h('div', {className:'carousel-item'},
              h('div', {className:'row justify-content-center align-items-center'},
                h('div', {className:'col-10 col-md-8 col-lg-6'},
                  h('div', {className:'row justify-content-center'},
                    h('div', {className:'quote text-center'}, entry.getIn(['data', 'testimonial3'])),
                    h('div', {className:'w-100'},''),
                    h('hr', {}),
                    h('div', {className:'w-100'},''),
                    h('div', {className:'author'}, entry.getIn(['data', 'author3']))
                  )
                )
              )
            )
          ),
          h('a', {className:'carousel-control-prev', href:'#carouselTestimonials', role:'button', 'data-slide':'prev'},
            h('span', {className:'carousel-control-prev-icon', 'area-hidden':'true'}, ''),
            h('span', {className:'sr-only'}, 'Previous'),
          ),
          h('a', {className:'carousel-control-next', href:'#carouselTestimonials', role:'button', 'data-slide':'next'},
            h('span', {className:'carousel-control-next-icon', 'area-hidden':'true'}, ''),
            h('span', {className:'sr-only'}, 'Next'),
          )
        )
      )
    )
  }
})


var LearnMorePreview = createClass({
  render: function(){
    var entry = this.props.entry;

    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center text-center'},
          h('h1', {className:'col-12 text-center'}, 'Learn more'),
          h('div', {className:'w-100'},''),
          h('h2', {className:'col-12 col-md-8 col-lg-6'}, 'FEATURED VIDEOS')
        ),
        h('div', {className:'row justify-content-center'},
          h('div', {className:'col-sm-12 col-md-8 col-lg-6 embed-responsive embed-responsive-16by9'},
            h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + entry.getIn(['data', 'video1']) + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
          ),
          h('div', {className:'col-sm-12 col-md-8 col-lg-6 embed-responsive embed-responsive-16by9'},
            h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + entry.getIn(['data', 'video2']) + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
          )
        )
      )
    )
  }
})

CMS.registerPreviewTemplate("header", HeaderPreview);
CMS.registerPreviewTemplate("paradigm", ParadigmPreview);
CMS.registerPreviewTemplate("whatweprovide", WhatWeProvideView);
CMS.registerPreviewTemplate("whatmakesus", WhatMakesUsView);
CMS.registerPreviewTemplate("mainindustries", MainIndustriesPreview);
CMS.registerPreviewTemplate("ourcustomers", OurCustomersPreview);
CMS.registerPreviewTemplate("worktogether", WorkTogetherPreview);
CMS.registerPreviewTemplate("learnmore", LearnMorePreview);

CMS.registerPreviewStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
