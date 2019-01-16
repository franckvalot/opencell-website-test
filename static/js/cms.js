var Template = createClass({
  render: function(){

      return h('section', {className:'hero-1'},
        h('div',{className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, entry.getIn(['data', 'title']))
          ),
          h('div', {className:'row justify-content-center'},
            "some variables"
          )
        )
      );
  }
})

/*
var ParadigmPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var videoId = entry.getIn(['data', 'video']);
    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col-12 text-center'}, 'A new paradigm.')
        ),
        h('div', {className:"row justify-content-center"},
          h('div', {className:"col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9"},
            h('iframe', {className:"youtube", src:'https://www.youtube.com/embed/'+ videoId +'?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'},'')
          )
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
      if(index==0) return h('div', {className:'carousel-item active'},
          h('h1', {}, item.get("title")),
          h('p', {}, item.get("subtitle"))
        );
      else return h('div', {className:'carousel-item'},
          h('h1', {}, item.get("title")),
          h('p', {}, item.get("subtitle"))
        );
    }

    return h('header', {className:'hero'},
      h('div', {className:'header-content-inner'},
        h('div', {id:'carouselHeader', className:'carousel slide row align-items-center', 'data-ride':'carousel'},
          h('ol', {className:'carousel-indicators'},
            carousel.map(carouselIndicator)
          ),
          h('div', {className:'carousel-inner'},
            carousel.map(carouselInner)
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

    var content = function(item){
      return h('div', {},
        h('h2', {}, item.get('title')),
        h('p', {}, item.get('text'))
      )
    };

    var columns = function(item){
      return h('div', {className:'col-8 col-md-4'},
        h('div', {className:'title-box text-center'}, item.get('title')),
        (item.get('content')).map(content),
      );
    };


    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col text-center'}, 'What makes us')
        ),
        h('div', {className:'row justify-content-center whatmakesus text-center'},
          entry.getIn(['data', 'columns']).map(columns)
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
    var logos = entry.getIn(['data', 'logos']);

    var logo = function(item){
      return h('div', {className:'col-6 col-md-4 col-lg-3'},
        h('img', {className:'img-fluid', alt:item.get('alt'), src:item.get('url')})
      );
    }

    return h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row align-items-center justify-content-center'},
          h('h1', {className:'col-12 text-center'}, 'Our Customers.')
        ),
        h('div', {className:'row align-items-center justify-content-center customer-logo'},
          logos.map(logo)
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
    var testimonials = entry.getIn(['data', 'testimonials']);

    var carouselIndicator = function(item, index){
      if(index==0) return h('li', {className: 'active', 'data-target':'"#carouselHeader', 'data-slide-to':index}, '');
      else return h('li', {'data-target':'"#carouselHeader', 'data-slide-to':index}, '');
    }

    var carouselInner = function(item, index){
      if(index==0) return h('div', {className:'carousel-item active'},
        h('div', {className:'row justify-content-center align-items-center'},
          h('div', {className:'col-10 col-md-8 col-lg-6'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'quote text-center'}, item.get("testimonial")),
              h('div', {className:'w-100'},''),
              h('hr', {}),
              h('div', {className:'w-100'},''),
              h('div', {className:'author'}, item.get("author"))
            )
          )
        )
      );
      else return h('div', {className:'carousel-item active'},
        h('div', {className:'row justify-content-center align-items-center'},
          h('div', {className:'col-10 col-md-8 col-lg-6'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'quote text-center'}, item.get("testimonial")),
              h('div', {className:'w-100'},''),
              h('hr', {}),
              h('div', {className:'w-100'},''),
              h('div', {className:'author'}, item.get("author"))
            )
          )
        )
      );
    }

    return h('section', {className:'hero-2'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center text-center'},
          h('h1', {className:'col-12 text-center'}, 'We work together'),
          h('div', {className:'w-100'},''),
          h('h2', {className:'col-12 col-md-8 col-lg-6'}, 'TESTIMONIALS')
        ),
        h('div', {id:'carouselTestimonials', className:'carousel slide', 'data-ride':'carousel'},
          h('ol', {className:'carousel-indicators'},
            testimonials.map(carouselIndicator)
          ),
          h('div', {className:'carousel-inner testimonials'},
            testimonials.map(carouselInner)
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

var AllPagesMetadatas = createClass({
  render: function(){
    var entry = this.props.entry;
    var metadatas = entry.getIn(['data', 'metadatas']);
    var metadata = function(item){
      return h('div', {style:{fontWeight: 'bold'}},
        h('span', {style: {color: 'gray'}}, '<'),
        h('span', {style: {color: '#ed5f5f'}}, 'meta '),
        h('span', {style: {color: '#f0b363'}}, 'name '),
        h('span', {style: {color: 'gray'}}, '=\"'),
        h('span', {style: {color: '#82cc6c'}}, item.get('name')),
        h('span', {style: {color: 'gray'}}, '\" '),
        h('span', {style: {color: '#f0b363'}}, 'content '),
        h('span', {style: {color: 'gray'}}, '=\"'),
        h('span', {style: {color: '#82cc6c'}}, item.get('content')),
        h('span', {style: {color: 'gray'}}, '\">')
      )
    }
    return h('div', {}, metadatas.map(metadata));
  }
})

var BusinessModelPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var boxes = entry.getIn(['data', 'boxes']);
      var boxe = function(item){
        return h('div', {className:'col-8 col-md-5 row justify-content-center text-center businessmodel-box'},
          h('img', {src:item.get('url'), alt:'icon'}),
          h('h2', {className:'col-12'}, item.get('title')),
          h('p', {className:'col-12'}, item.get('description'))
        )
      }

      return h('section', {className:'hero-1'},
        h('div',{className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, entry.getIn(['data', 'title']))
          ),
          h('div', {className:'row justify-content-center'},
            h('div', {className: 'col-10 col-md-8'}, entry.getIn(['data', 'content']))
          ),
          h('div', {className:'row justify-content-center'},
            boxes.map(boxe)
          )
        )
      );
  }
})

var CustomersPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var sections = entry.getIn(['data', 'sections']);

    var logoname = function(item){
      return h('li', {},
        h('h2', {}, item.get('alt'))
      );
    }

    var logo = function(item){
      return h('div', {className:'col-6 col-md-6 col-lg-4'},
        h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')})
      );
    }

    var section = function(item){
      return h('section',{className:'hero-1'},
        h('div',{className:'container'},
          h('div',{className:'row justify-content-center'},
            h('div',{className:'col-12 col-md-4 col-lg-3'},
              h('div',{className:'customers-box row align-items-center text-center'},
                h('h1',{}, item.get('name'))
              ),
              h('ul',{className:'customers-list'},
                item.get('logos').map(logoname)
              )
            ),
            h('div', {className:'col-12 col-md-8 col-lg-9 row align-items-center customers-logos'},
              item.get('logos').map(logo)
            )
          )
        )
      );
    }

    return h('div', {},
      h('section', {className:'hero-1'},
        h('div',{className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, entry.getIn(['data', 'title']))
          ),
          h('div', {className:'row justify-content-center'},
            h('div', {className: 'col-10 col-md-8'}, entry.getIn(['data', 'content']))
          )
        )
      ),
      sections.map(section)
    );
  }
})

var PressReleasesPreview = createClass({
    render: function(){
      var entry = this.props.entry;
      var articles = entry.getIn(['data', 'articles']);

      var article = function(item){
        return h('div', {className:'col-10 col-md-6 col-lg-4 row align-items-center justify-content-center'},
            h('div', {className:'col-12 row align-items-center justify-content-center pressreleases-box'},
              h('div', {className:'date'},
                h('h2', {}, item.get('month')),
                h('p', {}, item.get('year'))
              ),
              h('div', {className:'col-12 row align-items-center justify-content-center description'},
                h('div', {className:'col-10 row justify-content-center text-center'},
                  item.get('description'),
                  h('form', {action:item.get('url'), method:'get'},
                    h('button', {className:'opencell-btn', type:'submit', name:'button'}, 'READ')
                  )
                )
              )
            )
        );
      }

      return h('section', {className:'hero-1'},
        h('div',{className:'container'},
          h('div', {className:'row justify-content-center'}, articles.map(article))
        )
      );
    }
})
*/

function smallHeader(title, subtitle){
    return h('header', {className:'small_header'},
      h('div', {className:'header-content-inner'},
        h('div', {className:'row align-items-center justify-content-center'},
          h('div', {className:'col-10'},
            h('h1', {}, title),
            h('p', {}, subtitle)
          )
        )
      )
    );
}

function titleanddescription(title, content){
  return h('div', {},
    h('div', {className:'row justify-content-center'},
      h('h1', {className:'col-12 text-center'}, title)
    ),
    h('div', {className:'row justify-content-center text-center'},
      h('h1', {className:'col-10 col-md-8'}, content)
    )
  );
}

var AboutUSStoryPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var ourstorydata = entry.getIn(['data', 'ourstory']);
    var investorsdata = entry.getIn(['data', 'investors']);
    var partnersdata = entry.getIn(['data', 'partners']);
    var leadershipdata = entry.getIn(['data', 'leadership']);


    return h('div', {},
      smallHeader(entry.getIn(['data', 'title']), entry.getIn(['data', 'subtitle'])),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(ourstorydata.getIn(['data', 'title']), ourstorydata.getIn(['data', 'content'])),
          h('div', {className:'row justify-content-center'},

          )
        )
      )
    );

  }

})

/*
CMS.registerPreviewTemplate("header", HeaderPreview);
CMS.registerPreviewTemplate("paradigm", ParadigmPreview);
CMS.registerPreviewTemplate("whatweprovide", WhatWeProvideView);
CMS.registerPreviewTemplate("whatmakesus", WhatMakesUsView);
CMS.registerPreviewTemplate("mainindustries", MainIndustriesPreview);
CMS.registerPreviewTemplate("ourcustomers", OurCustomersPreview);
CMS.registerPreviewTemplate("worktogether", WorkTogetherPreview);
CMS.registerPreviewTemplate("learnmore", LearnMorePreview);
CMS.registerPreviewTemplate("allpagesmetadatas", AllPagesMetadatas)

CMS.registerPreviewTemplate("businessmodel", BusinessModelPreview);
CMS.registerPreviewTemplate("customers", CustomersPreview);
CMS.registerPreviewTemplate("pressreleases", PressReleasesPreview);
*/
CMS.registerPreviewTemplate("aboutusstory", AboutUSStoryPreview);


CMS.registerPreviewStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
