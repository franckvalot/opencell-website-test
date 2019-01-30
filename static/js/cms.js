var Template = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),

      ];
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

var PlatformModulesPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      var moduleslist = function(item, index){
        return h('li', {className:(index == 0 ? 'active' : null), 'data-target':'#carouselModules', 'data-slide-to':'index'},
          h('h2', {}, item.get('title'))
        );
      }

      var indicators = function(item, index){
        return h('li', {className:(index == 0 ? 'active' : null), 'data-target':'#carouselModules', 'data-slide-to':'index'},'');
      }

      var inner = function(item, index){
        return h('div', {className:'carousel-item '+ (index == 0 ? 'active' : null)},
          h('div', {className:'row justify-content-center align-items-center'},
            h('div', {className:'col-10 col-md-8 col-lg-6'},
              h('div', {className:'row justify-content-center'},
                h('h1', {className:'col-12'}, item.get('title')),
                h('div', {className:'col-12'}, item.get('content'))
              )
            )
          )
        )
      }
      return [smallHeader(entry),
        h('section', {className:'hero-1 modules'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-12 col-md-4 text-center list'},
                h('div', {className:'row justify-content-center'},
                  h('h1', {className:'col-12'}, 'Modules'),
                  h('ul', {className:'col-12', 'data-ride':'carousel'},
                    entry.getIn(['data', 'modules']).map(moduleslist)
                  )
                )
              ),
              h('div', {className:'col-12 col-md-9 text-left content'},
                h('div', {className:'row'},
                  h('div', {className:'carousel slide col', id:'carouselModules', 'data-ride':'carousel'},
                    h('ol', {className:'carousel-indicators'},
                      entry.getIn(['data', 'modules']).map(indicators)
                    ),
                    h('div', {className:'carousel-inner'},
                      entry.getIn(['data', 'modules']).map(inner)
                    ),
                    h('a', {className:'carousel-control-prev', href:'#carouselModules', role:'button', 'data-slide':'prev'},
                      h('span', {className:'carousel-control-prev-icon', 'area-hidden':'true'}, ''),
                      h('span', {className:'sr-only'}, 'Previous')
                    ),
                    h('a', {className:'carousel-control-next', href:'#carouselModules', role:'button', 'data-slide':'next'},
                      h('span', {className:'carousel-control-next-icon', 'area-hidden':'true'}, ''),
                      h('span', {className:'sr-only'}, 'Next')
                    )
                  )
                )
              )
            )
          )
        )
      ];
    }
})

var PlatformTechnologyPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var technologiesdata = entry.getIn(['data', 'technologies']);
      var boxesdata = entry.getIn(['data', 'boxes']);
      var columsdata = entry.getIn(['data', 'columns']);
      var businesslogicdata = entry.getIn(['data', 'businesslogic']);

      var boxes = function(item){
        return h('div', {className:'col-8 col-md-5 text-center platformtechnology-box'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12'}, item.get('title')),
            h('hr', {className:'col-2'},),
            h('p', {className:'col-12'}, item.get('description'))
          )
        )
      }

      var content = function(item){
          return h('div', {},
            (item.get('title') ? h('h2', {}, item.get('title')) : null),
            (item.get('text') ? h('p', {}, item.get('text')) : null)
          )
      }

      var columns = function(item){
        return h('div', {className:'col-12 col-md-4'},
          h('div', {className:'title-box text-center', dangerouslySetInnerHTML: {__html: item.get('title')}}),
          h('div', {className:'col-12'},
            item.get('content').map(content)
          )
        )
      }

      var subtitles = function(item){
        return h('h2', {className:'col-12 text-center text-md-left'}, item.get('subtitle'));
      }

      var businesslogic = function(item){
        return h('div', {className:'col-10 col-md-4'},
          h('div', {className:'row'},
            h('h1', {className:'col-12 text-center text-md-left'},
              item.get('title')
            ),
            item.get('subtitles').map(subtitles)
          ),
        )
      }

      var technologies = function(item){
          return h('div', {className:'col-10 col-md row align-items-center justify-content-center technologies'},
            h('div', {className:'col text-center img'},
              h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')})
            ),
            h('div', {className:'w-100'},''),
            h('div', {className:'col text-center description'},
              item.get('description')
            )
          );
      }

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'text1']))
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            boxesdata.map(boxes)
          )
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'text2']))
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center whatmakesus-box text-center'},
            columsdata.map(columns)
          )
        )
      ),
      h('section', {className:'hero-2'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center businesslogic'},
            h('div', {className:'col-8 col-md-4 order-md-last'},
              h('img', {className:'img-fluid', src: businesslogicdata.get('url'), alt: businesslogicdata.get('alt')})
            ),
            businesslogicdata.get('sections').map(businesslogic)
          )
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(technologiesdata.get('introduction'))
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            technologiesdata.get('technologies').map(technologies)
          )
        )
      )
      ];
  }
})

var SolutionByIndustryPreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var industriesdata = entry.getIn(['data', 'industries']);

    var industriesmenu = function(item){
      return h('h2', {className:'navigation'},
        h('a', {href:'#'}, item.get('nav'))
      );
    }

    var contents = function(item){
      return h('div', {className:'col-10 col-md'},
        h('h2', {className:''}, item.get('title')),
        h('p', {className:''}, item.get('content'))
      );
    }

    var industries = function(item){
        return h('section', {className:'hero-1 industries-box'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col text-center'}, item.get('title')),
              h('div', {className:'w-100'}, ),
              h('div', {className:'col-10 col-md-8 col-lg-6 embed-responsive embed-responsive-16by9 video'},
                h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + item.get('videoId') + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
              ),
              h('div', {className:'col-10 row justify-content-center content'},
                item.get('contents').map(contents)
              ),
              h('div', {className:'w-100'}, ''),
              h('form',{},
                h('button', {className:'opencell-btn'}, 'DISCOVER')
              )
            )
          )
        );
    }

    return [smallHeader(entry),
    h('section', {className:'hero-1 industries-box'},
      h('div', {className:'container'},
        h('div', {className:'text-center'},
          industriesdata.map(industriesmenu)
        )
      ),
    ),
    industriesdata.map(industries)
    ];
  }
})

var SolutionByRolePreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var rolesdata = entry.getIn(['data', 'roles']);

    var rolesmenu = function(item){
      return h('h2', {className:'navigation'},
        h('a', {href:'#'}, item.get('nav'))
      );
    }

    var benefits = function(item){
      return h('li', {}, item.get('benefit'));
    }

    var roles = function(item){
        return h('section', {className:'hero-1 roles-box alternate'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-6 col-md-5 img'},
                h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('title')})
              ),
              h('div', {className:'col-10 col-md-10 content'},
                h('h1', {}, item.get('title')),
                h('h2', {}, 'Background'),
                h('p', {}, item.get('background')),
                h('h2', {}, 'Benefits'),
                h('ul', {},
                  (item.get('benefits') ? item.get('benefits').map(benefits) : null )
                ),
                h('form',{},
                  h('button', {className:'opencell-btn'}, 'DISCOVER')
                )
              ),
            )
          )
        );
    }

    return [smallHeader(entry),
    h('section', {className:'hero-1 roles-box'},
      h('div', {className:'container'},
        h('div', {className:'text-center'},
          rolesdata.map(rolesmenu)
        )
      ),
    ),
    rolesdata.map(roles)
    ];
  }
})


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
      ];
  }
})

var AboutUsWorkplaceAndJobs = createClass({
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



CMS.registerPreviewTemplate("platformtechnology", PlatformTechnologyPreview);
CMS.registerPreviewTemplate("platformmodules", PlatformModulesPreview);

CMS.registerPreviewTemplate("solutionbyindustry", SolutionByIndustryPreview);
CMS.registerPreviewTemplate("solutionbyrole", SolutionByRolePreview);

CMS.registerPreviewTemplate("aboutusstory", AboutUSStoryPreview);
CMS.registerPreviewTemplate("aboutusbusinessmodel", AboutUsBusinessModelPreview);
CMS.registerPreviewTemplate("aboutuscustomers", AboutUsCustomersPreview);
CMS.registerPreviewTemplate("aboutuspartners", AboutUsParnersPreview);
CMS.registerPreviewTemplate("aboutusworkplaceandjobs", AboutUsWorkplaceAndJobs);


CMS.registerPreviewStyle("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
