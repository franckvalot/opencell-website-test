var Template = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),

      ];
  }
})

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function scripts(){
  return [h('script', {src:'https://code.jquery.com/jquery-3.3.1.min.js'}, ''),
          h('script', {src:'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin:'anonymous'}, ''),
          h('script', {src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', integrity: 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49', crossorigin:'anonymous'}, ''),
          h('script', {src:'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', integrity: 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy', crossorigin:'anonymous'}, '')
        ];
}
function smallHeader(item){
    if(item.getIn(['data', 'thumbnail']) != null){
      return h('header', {className:'small-header', style:{backgroundImage: 'url(' + item.getIn(['data', 'thumbnail']) +')'}},
        h('div', {className:'header-content-inner'},
          h('div', {className:'container'},
            h('div', {className:'row align-items-center'},
              h('div', {className:'col col-md-10'},
                h('h1', {}, item.getIn(['data', 'title'])),
                h('p', {}, item.getIn(['data', 'subtitle']))
              )
            )
          )
        )
      );
    }
    else{
      return h('header', {className:'small-header'},
        h('div', {className:'header-content-inner'},
          h('div', {className:'container'},
            h('div', {className:'row align-items-center'},
              h('div', {className:'col col-md-10'},
                h('h1', {}, item.getIn(['data', 'title'])),
                h('p', {}, item.getIn(['data', 'subtitle']))
              )
            )
          )
        )
      );
    }
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
      h('img', {className:'img-fluid', src: item.get('img').get('url'), alt:item.get('img').get('alt'), style:{marginTop:'50px'}})
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
  return h('section',{className:'hero-1 logos'},
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

function article(item){
  var date = new Date(item.get('date'));

  return h('div', {className:'col-7 col-md-6 col-lg-4'},
    h('div', {className:'row align-items-center justify-content-center'},
      h('div', {className:'col-11 article-box'},
        h('div', {className:'row align-items-center justify-content-center'},
          h('div', {className:'date'},
            h('h2', {}, months[date.getMonth()]),
            h('p', {}, date.getFullYear())
          ),
          h('div', {className:'col-12 description'},
            h('div', {className:'row align-items-center justify-content-center'},
              h('div', {className:'col-10'},
                h('div', {className:'row justify-content-center text-center'},
                  item.get('description'),
                  h('div', {className:'w-100'},''),
                  h('form', {},
                    h('button', {className:'opencell-btn'}, item.get('button'))
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}


var IndexPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var headerdata = entry.getIn(['data', 'header']);
      var paradigmdata = entry.getIn(['data', 'paradigm']);
      var whatweprovidedata = entry.getIn(['data', 'whatweprovide']);
      var whatmakesusdata = entry.getIn(['data', 'whatmakesus']);
      var mainindustriesdata = entry.getIn(['data', 'mainindustries']);
      var ourcustomersdata = entry.getIn(['data', 'ourcustomers']);
      var worktogetherdata = entry.getIn(['data', 'worktogether']);
      var learnmoredata = entry.getIn(['data', 'learnmore']);

      return [h('header', {className:'hero'},
        h('div', {className:'header-content-inner'},
          h('div', {className:'carousel slide row align-items-center', id:'carouselHeader', 'data-ride':'carousel'},
            h('ol', {className:'carousel-indicators'},
              (headerdata.get('carousel') ?
              headerdata.get('carousel').map(function(item, index){
                return h('li', {className:(index == 0 ? 'active':null), 'data-target':'#carouselHeader', 'data-slide-to':index}, '');
              })
              :
              null)
            ),
            h('div', {className:'carousel-inner'},
              (headerdata.get('carousel') ?
              headerdata.get('carousel').map(function(item, index){
                return h('div', {className:(index == 0 ? 'carousel-item active':'carousel-item')},
                  h('h1', {dangerouslySetInnerHTML: {__html: item.get('title')}}),
                  h('p', {},  item.get('subtitle'))
                );
              })
              :
              null)
            ),
            h('a', {className:'carousel-control-prev', href:'#'},
              h('span', {className:'carousel-control-prev-icon'},''),
              h('span', {className:'sr-only'}, 'Previous')
            ),
            h('a', {className:'carousel-control-next', href:'#'},
              h('span', {className:'carousel-control-next-icon'},''),
              h('span', {className:'sr-only'}, 'Next')
            )
          )
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, paradigmdata.get('title'))
          ),
          h('div', {className:'row justify-content-center'},
            h('div', {className:'col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9'},
              h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + paradigmdata.get('videoId') + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
            )
          )
        )
      ),
      h('section', {className:'hero-1 whatweprovide'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            h('h1', {className:'col-12 text-center'}, whatweprovidedata.get('title'))
          ),
          h('div', {className:'row align-items-center justify-content-center'},
            h('div', {className:'col-12 col-md-8 col-lg-6 img'},
              h('img', {className:'img-fluid', src: whatweprovidedata.get('image'), alt:''})
            ),
            h('div', {className:'col-12 col-md-12 col-lg-6 description'},
              this.props.widgetsFor('whatweprovide').getIn(['widgets', 'content']),
              h('button', {className:'opencell-btn'}, 'DISCOVER')
            )
          )
        )
      ),
      h('section', {className:'hero-1 whatmakesus'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, whatmakesusdata.get('title'))
          ),
          h('div', {className:'row justify-content-center text-center'},
            whatmakesusdata.get('columns').map(function(item){
              return h('div', {className:'col-12 col-md-4'},
                h('div', {className:'row justify-content-center align-items-center title', dangerouslySetInnerHTML: {__html: item.get('title')}}),
                item.get('content').map(function(item){
                  return [(item.get('title') ? h('h2', {className:'row justify-content-center align-items-center'},item.get('title')):null),
                  (item.get('text') ? h('p', {className:'row justify-content-center'},item.get('text')):null)
                  ];
                })
              );
            })
          )
        )
      ),
      h('section', {className:'hero-1 mainindustries'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            h('h1', {className:'col-12 text-center'}, mainindustriesdata.get('title')),
            h('div', {className:'w-100'}, ''),
            h('h2', {className:'col-12 col-md-8 col-lg-6'}, mainindustriesdata.get('subtitle'))
          ),
          h('div', {className:'row justify-content-center text-center'},
            mainindustriesdata.get('blocks').map(function(item){
              return h('div', {className:'col-12 col-md-6 box'},
                h('div', {className:'row align-items-center justify-content-center', dangerouslySetInnerHTML: {__html: item}})
              );
            })
          )
        )
      ),
      logos(ourcustomersdata),
      h('section', {className:'hero-1 worktogether'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center text-center'},
            h('h1', {className:'col-12'}, worktogetherdata.get('title')),
            h('div', {className:'w-100'}, ''),
            h('h2', {className:'col-12 col-md-8 col-lg-6'}, worktogetherdata.get('subtitle'))
          ),
          h('div', {className:'carousel slide', id:'carouselTestimonials', 'data-ride':'carousel'},
            h('ol', {className:'carousel-indicators'},
              (worktogetherdata.get('testimonials') ?
              worktogetherdata.get('testimonials').map(function(item, index){
                return h('li', {className:(index == 0 ? 'active':null), 'data-target':'#carouselTestimonials', 'data-slide-to':index}, '');
              })
              :
              null)
            ),
            h('div', {className:'carousel-inner testimonials'},
              (worktogetherdata.get('testimonials') ?
              worktogetherdata.get('testimonials').map(function(item, index){
                return h('div', {className:(index == 0 ? 'carousel-item active':'carousel-item')},
                  h('div', {className:'row justify-content-center align-items-center h-100'},
                    h('div', {className:'col-12'},
                      h('div', {className:'row justify-content-center'},
                        h('div', {className:'quote text-center'}, item.get('testimonial')),
                        h('div', {className:'w-100'}, ''),
                        h('hr', {}),
                        h('div', {className:'w-100'}, ''),
                        h('div', {className:'author'}, item.get('author'))
                      )
                    )
                  )
                );
              })
              :
              null)
            ),
            h('a', {className:'carousel-control-prev', href:'#'},
              h('span', {className:'carousel-control-prev-icon'},''),
              h('span', {className:'sr-only'}, 'Previous')
            ),
            h('a', {className:'carousel-control-next', href:'#'},
              h('span', {className:'carousel-control-next-icon'},''),
              h('span', {className:'sr-only'}, 'Next')
            )
          )
        )
      ),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center text-center'},
            h('h1', {className:'col-12 text-center'}, learnmoredata.get('title')),
            h('div', {className:'w-100'}, ''),
            h('h2', {className:'col-12 col-md-8 col-lg-6'}, learnmoredata.get('subtitle'))
          ),
          h('div', {className:'row justify-content-center'},
            (learnmoredata.get('videoids') ? learnmoredata.get('videoids').map(function(item){
              return h('div', {className:'col-sm-12 col-md-8 col-lg-6 embed-responsive embed-responsive-16by9'},
                h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + item.get('videoId') + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
              );
            }):null)
          )
        )
      ),
      scripts()
      ];
  }
})

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
        ),
        scripts()
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

      var subtitles = function(item){
        return h('h2', {className:'col-12 text-center text-md-left'}, item.get('subtitle'));
      }
      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'text1']))
        )
      ),
      h('section', {className:'hero-1 platformtechnology'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            boxesdata.map(function(item){
              return h('div', {className:'col-12 col-md-8 col-lg-5 text-center box'},
                h('div', {className:'row justify-content-center'},
                  h('h1', {className:'col-12'}, item.get('title')),
                  h('hr', {},),
                  h('p', {className:'col-12'}, item.get('description'))
                )
              );
            })
          )
        )
      ),
      h('section', {className:'hero-1 reduce-margin'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'text2']))
        )
      ),
      h('section', {className:'hero-1 platformtechnology whatmakesus'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center text-center'},
            columsdata.map(function(item){
              return h('div', {className:'col-12 col-md-4'},
                h('div', {className:'row justify-content-center align-items-center title', dangerouslySetInnerHTML: {__html: item.get('title')}}),
                h('div', {className:'col-12'},
                  (item.get('content') ? item.get('content').map(function(item){
                      return h('div', {},
                        (item.get('title') ? h('h2', {}, item.get('title')) : null),
                        (item.get('text') ? h('p', {}, item.get('text')) : null)
                      )
                  }):null)
                )
              );
            })
          )
        )
      ),
      h('section', {className:'hero-2 platformtechnology businesslogic'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            h('div', {className:'col-8 col-md-4'},
              (businesslogicdata ? businesslogicdata.map(function(item){
                  return h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')});
                }):null)
            ),
            h('div', {className:'col-12 col-md-8'},
              h('div', {className:'carousel slide row align-items-center', id:'carouselBusinesslogic', "data-ride":"carousel"},
                h('ol', {className:'carousel-indicators'},
                  (businesslogicdata ? businesslogicdata.map(function(item, index){
                    return h('li', {"data-target":"#carouselBusinesslogic", "data-slide-to":index, className:(index == 0 ? 'active':null)}, '');
                  }):null)
                ),
                h('div', {className:'carousel-inner'},
                  (businesslogicdata ? businesslogicdata.map(function(item, index){
                    return h('div', {className:'carousel-item col-12' + (index == 0 ? 'active':null)},
                      h('div', {className:'row align-items-center h-100'},
                        h('h1', {className:'text-center text-md-left'}, item.get('title')),
                        h('p', {}, item.get('content'))
                      )
                    );
                  }):null)
                )
              )
            )
          )
        )
      ),
      h('section', {className:'hero-1 reduce-margin'},
        h('div', {className:'container'},
          titleanddescription(technologiesdata.get('introduction'))
        )
      ),
      h('section', {className:'hero-1 reduce-margin platformtechnology technologies'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            technologiesdata.get('technologies').map(function(item){
                return h('div', {className:'col-10 col-md row align-items-center justify-content-center'},
                  h('div', {className:'col text-center description'},
                    item.get('description')
                  ),
                  h('div', {className:'w-100'},''),
                  h('div', {className:'col text-center img'},
                    h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')})
                  )
                );
            })
          )
        )
      ),
      scripts()
      ];
  }
})

var PlatformEcosystemPreview = createClass({
  render: function(){
    var entry = this.props.entry;

    return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'introduction']))
        )
      ),
      h('section', {className:'hero-1 reduce-margin ecosystem'},
        h('div', {className:'navigation text-center'},
          h('div', {className:'container'},
            entry.getIn(['data', 'ecosysindustags']).map(function(item){
              return h('h2', {className:'navigation'}, h('a', {}, (item  ? item.toUpperCase():null)));
            })
          )
        ),
        h('div', {className:'navigation text-center'},
          h('div', {className:'container'},
            entry.getIn(['data', 'ecosysroletags']).map(function(item){
              return h('h2', {className:'navigation'}, h('a', {}, (item ? item.toUpperCase():null)));
            })
          )
        )
      ),
      h('section', {className:'hero-1 reduce-margin'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center customer-logo'},
            entry.getIn(['data', 'logos']).map(function(item){
              return h('div', {className:'col-6 col-md-4 col-lg-3 logo'},
                h('img', {className:'img-fluid', src:item.get('url'), alt:item.get('alt')})
              );
            })
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

    return [smallHeader(entry),
    h('section', {className:'hero-1 reduce-margin byindustry'},
      h('div', {className:'navigation text-center'},
        h('div', {className:'container'},
          industriesdata.map(function(item){
            return h('h2', {className:'navigation'},
              h('a', {}, (item.get('nav') ? item.get('nav').toUpperCase():null))
            );
          })
        )
      ),
    ),
    industriesdata.map(function(item){
        return h('section', {className:'hero-1 reduce-margin byindustry'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('h1', {className:'col text-center'}, item.get('title')),
              h('div', {className:'w-100'}, ),
              h('div', {className:'col-12 col-md-10  embed-responsive embed-responsive-16by9 video'},
                h('iframe', {src:'https://www.youtube.com/embed/' + item.get('videoId') + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
              ),
              h('div', {className:'col-12 content'},
                h('div', {className:'row justify-content-center'},
                  (item.get('contents') ? item.get('contents').map(function(item){
                    return h('div', {className:'col-10 col-md'},
                      h('h2', {className:''}, item.get('title')),
                      h('p', {className:''}, item.get('content'))
                    );
                  }) : null)
                )
              ),
              h('div', {className:'w-100'}, ''),
              h('form',{},
                h('button', {className:'opencell-btn'}, 'TRY NOW')
              )
            )
          )
        );
    }),
    scripts()
    ];
  }
})

var SolutionByRolePreview = createClass({
  render: function(){
    var entry = this.props.entry;
    var rolesdata = entry.getIn(['data', 'roles']);

    var benefits = function(item){
      return h('li', {}, item.get('benefit'));
    }
    return [smallHeader(entry),
      h('section', {className:'hero-1 reduce-margin byindustry'},
        h('div', {className:'navigation text-center'},
          h('div', {className:'container'},
            rolesdata.map(function(item){
              return h('h2', {className:'navigation'},
                h('a', {}, (item.get('nav') ? item.get('nav').toUpperCase():null))
              );
            })
          )
        ),
      ),
      rolesdata.map(function(item){
        return h('section', {className:'hero-1 reduce-margin byrole alternate'},
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
      }),
      scripts()
    ];
  }
})

var AboutUsPressReleasesPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var articlesdata = entry.getIn(['data', 'articles']);

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            articlesdata.map(article)
          )
        )
      ),
      scripts()
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

    return [smallHeader(entry),
    h('section', {className:'hero-1 ourstory'},
      h('div', {className:'container'},
        titleanddescription(ourstorydata),
        h('div', {className:'row margin text-center'},
          ourstorydata.get('boxes').map(function(item, index){
            if(index%3==0 && index>0){
              return [h('div', {className:'row align-items-center justify-content-center box'},
                h('div', {}, item.get('content'))
              ),
              h('div', {className:'col-12 d-none d-md-block d-lg-none'}, '')
              ];
            }
            else{
              return h('div', {className:'row align-items-center justify-content-center box'},
                h('div', {}, item.get('content'))
              );
            }
          })
        )
      )
    ),
    logos(investorsdata),
    logos(partnersdata),
    h('section', {className:'hero-1 leadership'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col-12 text-center'}, leadershipdata.get('title'))
        ),
        h('div', {className:'row justify-content-center'},
          (leadershipdata.get('leaders') =! null ?
            leadershipdata.get('leaders').map(function(item){
              return h('div', {className:'col-8 col-md-6 col-lg-4 box text-center'},
                h('img', {src: item.get('url'), alt: item.get('alt')}),
                h('div', {},
                  h('h2', {}, (item.get('name') ?  item.get('name').toUpperCase():null)),
                  h('p', {}, item.get('position'))
                )
              );
          }):null)
        )
      )
    ),
    scripts()
    ];
  }
})

var AboutUsBusinessModelPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var introductiondata = entry.getIn(['data', 'introduction']);
      return [smallHeader(entry),
        h('section', {className:'hero-1 reduce-margin'},
          h('div', {className:'container'},
            titleanddescription(introductiondata)
          )
        ),
        h('section', {className:'hero-1 businessmodel reduce-margin'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
                entry.getIn(['data', 'boxes']).map(function(item){
                  return h('div', {className:'col-11 col-md-5 text-center box'},
                    h('div', {className:'row justify-content-center'},
                      h('img', {src:item.get('url'), alt:'icon'}),
                      h('h2', {className:'col-12'}, item.get('title')),
                      h('p', {className:'col-12'}, item.get('description'))
                    )
                  )
                })
            )
          )
        ),
        scripts()
      ];
  }
})

var AboutUsCustomersPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var introductiondata = entry.getIn(['data', 'introduction']);

      return [smallHeader(entry),
        (entry.getIn(['data', 'sections']) ?
          entry.getIn(['data', 'sections']).map(function(item){
            return h('section', {className:'hero-1 customers'},
              h('div', {className:'container'},
                h('div', {className:'row justify-content-center'},
                  h('div', {className:'col list'},
                    h('div', {className:'row align-items-center text-center box'},
                      h('h1', {}, item.get('title'))
                    ),
                    h('ul', {},
                      (item.get('logos') ? item.get('logos').map(function(item){
                          return h('li',{}, h('h2', {}, (item.get('alt') ? item.get('alt').toUpperCase():null)));
                      }):null)
                    )
                  ),
                  h('div', {className:'col-12 col-md-8 col-lg-10 logos'},
                    h('div', {className:'row align-items-center align-items-center'},
                      (item.get('logos') ? item.get('logos').map(function(item){
                        return h('div', {className:'col-6 col-lg-4'},
                          h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('alt')})
                        );
                      }):null)
                    )
                  )
                )
              )
            )
          }):null),
      scripts()
      ];
  }
})

var AboutUsParnersPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),
        (entry.getIn(['data', 'sections']) ? entry.getIn(['data', 'sections']).map(function(item){
            return logos(item);
        }):null)
      ];
  }
})

var AboutUsWorkplaceAndJobsPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),
      h('section', {className:'hero-1 reduce-margin'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'introduction']))
        )
      ),
      scripts()
      ];
  }
})

var BlogPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var date = new Date(entry.getIn(['data', 'date']));
      var day = date.getDay();
      var month = months[date.getMonth()];
      var year = date.getFullYear();
      var dateString = day + ' ' + month + ' ' + year;

      return [smallHeader(entry),
      h('section', {className:'blog'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center text-left'},
            h('h1', {className:'col col-md-10 col-lg-8'}, entry.getIn(['data', 'title'])),
            h('div', {className:'w-100'},''),
            h('p', {className:'col col-md-10 col-lg-8'},
              h('span', {}, 'Published on: '),
              h('span', {}, dateString),
              h('span', {}, ', by: '),
              h('span', {className:'author'}, entry.getIn(['data', 'author']))
            ),
            h('div', {className:'w-100'}, ),
            h('div', {className:'col col-md-10 col-lg-8'},
              this.props.widgetFor('body')
            )
          )
        )
      ),
      scripts()
      ];
  }
})


CMS.registerPreviewTemplate("indexdata", IndexPreview);

CMS.registerPreviewTemplate("platformtechnology", PlatformTechnologyPreview);
CMS.registerPreviewTemplate("platformmodules", PlatformModulesPreview);
CMS.registerPreviewTemplate("platformecosystem", PlatformEcosystemPreview);

CMS.registerPreviewTemplate("solutionbyindustry", SolutionByIndustryPreview);
CMS.registerPreviewTemplate("solutionbyrole", SolutionByRolePreview);


CMS.registerPreviewTemplate("aboutuspressreleases", AboutUsPressReleasesPreview);
CMS.registerPreviewTemplate("aboutusstory", AboutUSStoryPreview);
CMS.registerPreviewTemplate("aboutusbusinessmodel", AboutUsBusinessModelPreview);
CMS.registerPreviewTemplate("aboutuscustomers", AboutUsCustomersPreview);
CMS.registerPreviewTemplate("aboutuspartners", AboutUsParnersPreview);
CMS.registerPreviewTemplate("aboutusworkplaceandjobs", AboutUsWorkplaceAndJobsPreview);

CMS.registerPreviewTemplate("blog", BlogPreview);


CMS.registerPreviewStyle("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
CMS.registerPreviewStyle("/css/glyphicons.css");
