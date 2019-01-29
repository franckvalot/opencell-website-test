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

function smallHeader(item){
    return h('header', {className:'small-header text-center text-md-left'},
      h('div', {className:'header-content-inner'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            h('div', {className:'col col-md-10 col-lg-8'},
              h('h1', {}, item.getIn(['data', 'title'])),
              h('p', {}, item.getIn(['data', 'subtitle']))
            )
          )
        )
      )
    );
}

function titleanddescription(item){
  return [h('div', {className:'row justify-content-center'},
      h('h1', {className:'col-12 text-center'}, item.get('title'))
    ),
    h('div', {className:'row justify-content-center text-center'},
      h('div', {className:'col-10 col-md-8'}, item.get('content'))
    ),
    (item.get('img') != null ?
    [h('div', {className:'w-100'},''),
    h('div', {className:'col'},
      h('img', {className:'img-fluid', src: item.get('img').get('url'), alt:item.get('img').get('alt')})
    )]
    :
    null)
  ];
}

function logo(item){
  return h('div', {className:'col-6 col-md-4 col-lg-3'},
    h('img', {className:'img-fluid', src: item.get('url'), alt:item.get('alt')})
  );
}

function logos(item){
  return h('section',{className:'hero-1'},
    h('div', {className:'container'},
      h('div', {className:'row align-items-center justify-content-center'},
        h('h1', {className:'col-12 text-center'}, item.get('title'))
      ),
      h('div', {className:'row align-items-center justify-content-center customer-logo'},
        item.get('logos').map(logo)
      ),
      (item.get('button') ?
      h('div', {className:'row align-items-center justify-content-center text-center'},
        h('div', {className:'col'},
          h('button', {className:'opencell-btn', type:'button', name:'button'}, item.get('button'))
        )
      ):
      null),
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

    var boxes = function(item, index){
      if(index%3==0 && index>0){
        return [h('div', {className:'col-5 col-md-3 col-lg'},
          h('div', {className:'row align-items-center justify-content-center ourstory-box'},
            h('div', {className:'col-11'}, item.get('content'))
          )
        ),
        h('div', {className:'col-12 d-none d-md-block d-lg-none'}, '')
        ];
      }
      else{
        return h('div', {className:'col-5 col-md-3 col-lg'},
          h('div', {className:'row align-items-center justify-content-center ourstory-box'},
            h('div', {className:'col-11'}, item.get('content'))
          )
        );
      }
    }

    var leaders = function(item){
      return h('div', {className:'col-8 col-md-6 col-lg-4 leadership-box text-center'},
        h('img', {src: item.get('url'), alt: item.get('alt')}),
        h('h2', {}, item.get('name')),
        h('p', {}, item.get('position'))
      );
    }

    return [smallHeader(entry),
    h('section', {className:'hero-1'},
      h('div', {className:'container'},
        titleanddescription(ourstorydata),
        h('div', {className:'row justify-content-center'},
          ourstorydata.get('boxes').map(boxes)
        )
      )
    ),
    logos(investorsdata),
    logos(partnersdata),
    h('section', {className:'hero-1'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col-12 text-center'}, leadershipdata.get('title'))
        ),
        h('div', {className:'row justify-content-center'},
          leadershipdata.get('leaders').map(leaders)
        )
      )
    )
    ];
  }
})

var AboutUsBusinessModelPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var introductiondata = entry.getIn(['data', 'introduction']);
      var boxes = function(item){
        return h('div', {className:'col-8 col-md-5 text-center businessmodel-box'},
          h('div', {className:'row justify-content-center'},
            h('img', {src:item.get('url'), alt:'icon'}),
            h('h2', {className:'col-12'}, item.get('title')),
            h('p', {className:'col-12'}, item.get('description'))
          )
        )
      }

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(introductiondata)
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
              entry.getIn(['data', 'boxes']).map(boxes)
          )
        )
      )
      ];
  }
})

var AboutUsCustomersPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var introductiondata = entry.getIn(['data', 'introduction']);

      var logos = function(item){
        return h('div', {className:'col-6 col-lg-4'},
          h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')})
        );
      }

      var logoslist = function(item){
          return h('li',{}, h('h2', {}, item.get('alt')));
      }

      var sections = function(item){
        return h('section', {className:'hero-1'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-12 col-md-5 col-lg-4'},
                h('div', {className:'row align-items-center text-center customers-box'},
                  h('h1', {}, item.get('title'))
                ),
                h('ul', {className:'customers-list'},
                  item.get('logos').map(logoslist)
                )
              ),
              h('div', {className:'col-12 col-md-8 col-lg-9 customers-logos'},
                h('div', {className:'row align-items-center align-items-center'},
                  item.get('logos').map(logos)
                )
              )
            )
          )
        )
      }

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(introductiondata),
        )
      ),
      entry.getIn(['data', 'sections']).map(sections)
      ];
  }
})

var AboutUsParnersPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      var sections = function(item){
          return logos(item);
      }

      return [smallHeader(entry),
      entry.getIn(['data', 'sections']).map(sections)
        entry.getIn(['data', 'sections']).map(sections)
      ];
  }
})

var JobsOffersPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'introduction']))
        )
      )
      ];
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
CMS.registerPreviewTemplate("aboutusbusinessmodel", AboutUsBusinessModelPreview);
CMS.registerPreviewTemplate("aboutuscustomers", AboutUsCustomersPreview);
CMS.registerPreviewTemplate("aboutuspartners", AboutUsParnersPreview);
CMS.registerPreviewTemplate("jobsoffers", JobsOffersPreview);


CMS.registerPreviewStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
