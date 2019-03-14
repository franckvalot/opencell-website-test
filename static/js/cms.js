var Template = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),
        // dangerouslySetInnerHTML: {__html: item.get('title')}
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
    if(item.getIn(['data', 'thumbnail']) != null || item.getIn(['data', 'background']) != null ){
      return h('header', {className:'small-header', style:{backgroundImage: 'url(' + (item.getIn(['data', 'thumbnail']) || item.getIn(['data', 'background'])) +')'}},
        h('div', {className:'header-content-inner'},
          h('div', {className:'container'},
            h('div', {className:'row align-items-center'},
              h('div', {className:'col col-md-10'},
                h('h1', {dangerouslySetInnerHTML: {__html: item.getIn(['data', 'title'])}}),
                h('p', {dangerouslySetInnerHTML: {__html: item.getIn(['data', 'subtitle'])}})
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
function sectiondescription(item){
  if(item && item.get('number') && item.get('description')){
    return h('section', {className:'description'},
            h('div', {className:'container d-none d-md-block'},
              h('div', {className:'row align-items-top'},
                h('span', {}, item.get('number')),
                h('hr', {}),
                h('span', {dangerouslySetInnerHTML: {__html:item.get('description')}})
              )
            )
          );
  }
}
function titleanddescription(item){
  return [h('div', {className:'row justify-content-center'},
      h('h1', {className:'col-12 text-center', dangerouslySetInnerHTML: {__html: item.get('title')}})
    ),
    h('div', {className:'row justify-content-center text-center'},
      h('div', {className:'col-10 col-md-8', dangerouslySetInnerHTML: {__html: item.get('content')}})
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
function logos(item){
  return h('section',{className:'hero-1 logos'},
    h('div', {className:'container'},
      h('div', {className:'row align-items-center justify-content-center'},
        h('h1', {className:'col-12 text-center'}, item.get('title'))
      ),
      h('div', {className:'row align-items-center justify-content-center customer-logo'},
        item.get('logos').map(function(item){
          return h('div', {className:'col-6 col-md-4 col-lg-3 logo'},
            h('div', {className:'row align-items-center h-100'},
              h('div', {className:'col'},
                h('img', {className:'img-fluid', src: item.get('url'), alt:item.get('alt')})
              )
            )
          );
        }),
        h('div', {className:'col-12 logo'}, "")
      ),
      (item.get('button') ?
      h('div', {className:'row align-items-center justify-content-center text-center'},
        h('div', {className:'col'},
          h('form', {className:''},
            h('button', {className:'opencell-btn', type:'button', name:'button'}, item.get('button'))
          )
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
            h('h2', {}, months[date.getMonth()].toUpperCase()),
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
function testimonials(item){
  return h('section', {className:'hero-1 worktogether'},
    h('div', {className:'container'},
      h('div', {className:'row justify-content-center text-center'},
        h('h1', {className:'col-12'}, item.get('title')),
        h('div', {className:'w-100'}, ''),
        h('h2', {className:'col-12 col-md-8 col-lg-6'}, item.get('subtitle'))
      ),
      h('div', {className:'carousel slide', id:'carouselTestimonials', 'data-ride':'carousel'},
        h('div', {className:'carousel-inner testimonials'},
          (item.get('testimonials') ?
          item.get('testimonials').map(function(item, index){
            return h('div', {className:(index == 0 ? 'carousel-item active':'carousel-item')},
              h('div', {className:'row justify-content-center align-items-center h-100'},
                h('div', {className:'col'},
                  h('div', {className:'row justify-content-center'},
                    (item.get('portrait') ?
                    [h('div', {className:'col-6 col-lg-2 text-center'},
                      h('img', {src:item.get('portrait')})
                    ),
                    h('div', {className:'w-100'}, '')]
                    :null),
                    h('div', {className:'col-12 col-lg quote text-center'}, item.get('testimonial')),
                    h('div', {className:'w-100'}, ''),
                    h('hr', {}),
                    h('div', {className:'w-100'}, ''),
                    h('div', {className:'author'}, item.get('author')),
                    h('div', {className:'w-100'}, ''),
                    h('div', {className:'position'}, item.get('position'))
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
  );
}
var IndexPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var headerdata = entry.getIn(['data', 'header']);
      var introductiondata = entry.getIn(['data', 'introduction']);
      var whatweprovidedata = entry.getIn(['data', 'whatweprovide']);
      var whatmakesusdata = entry.getIn(['data', 'whatmakesus']);
      var mainindustriesdata = entry.getIn(['data', 'mainindustries']);
      var ourcustomersdata = entry.getIn(['data', 'ourcustomers']);
      var worktogetherdata = entry.getIn(['data', 'worktogether']);
      var learnmoredata = entry.getIn(['data', 'learnmore']);


      return [h('header', {className:'hero', style:{backgroundImage: (headerdata.get('background') ? 'url(' + headerdata.get('background') +')':null)}},
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
                  h('div', {className:'row align-items-center h-100'},
                    h('div', {className:'col'},
                      h('h1', {dangerouslySetInnerHTML: {__html: item.get('title')}}),
                      h('p', {},  item.get('subtitle')),
                      (item.get('button') ?
                        (item.get('button').get('name') && item.get('button').get('url') ?
                          h('form', {}, h('button', {className:'opencell-btn'}, item.get('button').get('name')))
                        :null)
                      :null)
                    )
                  )
                );
              })
              :null)
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
      sectiondescription(entry.getIn(['data', 'separator1'])),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(introductiondata)
        )
      ),
      sectiondescription(entry.getIn(['data', 'separator2'])),
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
              whatweprovidedata.get('content'),
              h('button', {className:'opencell-btn'}, 'DISCOVER')
            )
          )
        )
      ),
      sectiondescription(entry.getIn(['data', 'separator3'])),
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
      sectiondescription(entry.getIn(['data', 'separator4'])),
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
                h('a', {},
                  h('div', {className:'row align-items-center justify-content-center', dangerouslySetInnerHTML: {__html: item}})
                )
              );
            })
          )
        )
      ),
      sectiondescription(entry.getIn(['data', 'separator5'])),
      logos(ourcustomersdata),
      sectiondescription(entry.getIn(['data', 'separator6'])),
      testimonials(worktogetherdata),
      sectiondescription(entry.getIn(['data', 'separator7'])),
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
                h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + item.get('videoid') + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
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

      return [smallHeader(entry),
        sectiondescription(entry.getIn(['data', 'separator1'])),
        sectiondescription(entry.getIn(['data', 'separator2'])),
        h('section', {className:'hero-1 modules d-sm-none d-md-block'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-12 col-md-5 col-lg-5 text-center list'},
                h('div', {className:'row justify-content-center'},
                  h('h1', {className:'col-12'}, 'Modules'),
                  h('ul', {className:'col-12'},
                    entry.getIn(['data', 'modules']).map(function(item, index){
                      return h('li', {className:(index == 0 ? 'active' : null)},
                        h('h2', {}, (item.get('title') ? item.get('title').toUpperCase() : null))
                      );
                    })
                  )
                )
              ),
              h('div', {className:'col-12 col-md-7 text-left content'},
                h('div', {className:'row justify-content-center h-100'},
                  entry.getIn(['data', 'modules']).map(function(item, index){
                    return h('div', {className:'col' + (index == 0  ? ' active':null)},
                      h('h1', {className:'col-12'}, item.get('title')),
                      h('div', {className:'carousel slide col-12 h-75'},
                        h('ol', {className:'carousel-indicators'},
                          item.get('contents').map(function(item, index){
                            return h('li', {className:(index == 0  ? 'active':null)}, '');
                          })
                        ),
                        h('div', {className:'carousel-inner h-100'},
                          h('div', {className:'carousel-item' + (index == 0  ? ' active':null)},
                            h('div', {className:'row justify-content-center h-100'},
                              h('div', {className:'col-12'},
                                h('div', {}, item.get('content'))
                              )
                            )
                          )
                        )
                      )
                    );
                  })
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
      var businesslogicdata = this.props.widgetsFor('businesslogic');


      var subtitles = function(item){
        return h('h2', {className:'col-12 text-center text-md-left'}, item.get('subtitle'));
      }

      return [smallHeader(entry),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'introduction']))
        )
      ),
      h('section', {className:'hero-1 reduce-margin platformtechnology'},
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
      h('section', {className:'hero-2 platformtechnology businesslogic'},
        h('div', {className:'container'},
          h('div', {className:'row align-items-center justify-content-center'},
            h('div', {className:'col-8 col-md-4'},
              (businesslogicdata ? businesslogicdata.map(function(item, index){
                  return h('img', {className:'img-fluid' + (index == 0 ? ' active':''), src: item.getIn(['data', 'url']), alt: item.getIn(['data', 'alt'])});
                }):null)
            ),
            h('div', {className:'col-12 col-md-8'},
              h('div', {className:'carousel slide row align-items-center', id:'carouselBusinesslogic', "data-ride":"carousel"},
                h('ol', {className:'carousel-indicators'},
                  (businesslogicdata ? businesslogicdata.map(function(item, index){
                    return h('li', {"data-target":"#carouselBusinesslogic", "data-slide-to":index, className:(index == 0 ? 'active':'')}, '');
                  }):null)
                ),
                h('div', {className:'carousel-inner'},
                  (businesslogicdata ? businesslogicdata.map(function(item, index){
                    return h('div', {className:'carousel-item col-12' + (index == 0 ? ' active':'')},
                      h('div', {className:'row align-items-center h-100'},
                        h('h1', {className:'text-center text-md-left'}, item.getIn(['data', 'title'])),
                        h('p', {}, item.getIn(['widgets', 'content']))
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
      h('section', {className:'hero-1 platformtechnology technologies'},
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
    h('section', {className:'byindustry'},
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
    this.props.widgetsFor('industries').map(function(item){
        return h('section', {className:'hero-1 byindustry'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('h1', {className:'col text-center'}, item.getIn(['data', 'title'])),
              h('div', {className:'w-100'}, ),
              h('div', {className:'col-12 col-md-10  embed-responsive embed-responsive-16by9 video'},
                h('iframe', {src:'https://www.youtube.com/embed/' + item.getIn(['data', 'videoid']) + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
              ),
              h('div', {className:'col-12 content'},
                h('div', {className:'row justify-content-center'},
                  h('div', {className:'col'}, item.getIn(['widgets', 'content']))
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
      h('section', {className:'byindustry'},
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
        return h('section', {className:'hero-1 byrole alternate'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-6 col-md-5 img'},
                h('img', {className:'img-fluid', src: item.get('url'), alt: item.get('title')})
              ),
              h('div', {className:'col-10 col-md-10 content'},
                h('h1', {}, item.get('title')),
                h('h2', {}, 'BACKGROUND'),
                h('p', {}, item.get('background')),
                h('h2', {}, 'BENEFITS'),
                h('ul', {},
                  (item.get('benefits') ? item.get('benefits').map(benefits) : null )
                ),
                h('form',{className:'text-right'},
                  h('button', {className:'opencell-btn'}, 'TRY NOW')
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
      h('section', {className:'hero-1 articles'},
        h('div', {className:'container'},
          h('div', {className:'row justify-content-center'},
            h('div', {className:'col-12 text-center'}, 'Press releases')
          ),
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
    var leadershipdata = entry.getIn(['data', 'leadership']);
    var investorsdata = entry.getIn(['data', 'investors']);

    return [smallHeader(entry),
    sectiondescription("01", "Our story"),
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
    sectiondescription("02", "Our team"),
    h('section', {className:'hero-1 leadership'},
      h('div', {className:'container'},
        h('div', {className:'row justify-content-center'},
          h('h1', {className:'col-12 text-center'}, leadershipdata.get('title'))
        ),
        h('div', {className:'row justify-content-center'},
          (leadershipdata.get('leaders') ?
            leadershipdata.get('leaders').map(function(item){
              return h('div', {className:'col-8 col-md-6 col-lg-4 box text-center'},
                h('img', {src: item.get('url'), alt: item.get('alt')}),
                h('div', {},
                  h('h2', {}, (item.get('name') ?  item.get('name').toUpperCase():null)),
                  h('p', {}, item.get('position')),
                  (item.get('socialnetworks') ?
                    h('div', {className:'socialnetworks'},
                      item.get('socialnetworks').map(function(item){
                        return h('a', {href:(item.get('url') || '#')},
                          h('img', {src:item.get('icon'), alt:item.get('name')})
                        );
                      })
                    )
                  :null)
                )
              );
            })
          :null)
        )
      )
    ),
    sectiondescription("03", "Our investors"),
    logos(investorsdata),
    scripts()
    ];
  }
})

var AboutUsBusinessModelPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var introductiondata = entry.getIn(['data', 'introduction']);
      return [smallHeader(entry),
        h('section', {className:'hero-1'},
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
        (entry.getIn(['data', 'sections']) ?
          entry.getIn(['data', 'sections']).map(function(item){
            return logos(item);
          })
        :null),
        testimonials(entry.getIn(['data', 'worktogether']))
      ];
  }
})

var AboutUsWorkplaceAndJobsPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      return [smallHeader(entry),
      sectiondescription("01", "Workplace"),
      h('section', {className:'hero-1'},
        h('div', {className:'container'},
          titleanddescription(entry.getIn(['data', 'introduction']))
        )
      ),
      sectiondescription("02", "Career"),
      scripts()
      ];
  }
})

var KnowledgeCenterPreview = createClass({
  render: function(){
      var entry = this.props.entry;

      return [h('header', {className:'small-header'},
          h('div', {className:'header-content-inner'},)
        ),
        h('section', {className:'hero-1 knowledgecenter'},
          h('div', {className:'container'},
            h('div', {className:'row justify-content-center text-center'},
              h('h1', {className:'col-12 text-center'}, entry.getIn(['data', 'title'])),
              h('div', {className:'w-100'}, '')
            ),
            h('div', {className:'row justify-content-center text-center'},
              ( entry.getIn(['data', 'sections']) ? entry.getIn(['data', 'sections']).map(function(item){
                return h('div', {className:'col-12 col-md-4 margin'},
                  h('div', {className:'row align-items-center justify-content-center h-100'},
                    h('div', {className:'col-11 box h-100'},
                      h('div', {}, h('h2', {}, (item.get('title') || null))),
                      h('p', {}, (item.get('description') || null)),
                      h('form', {}, h('button', {className:'opencell-btn'}, (item.get('button') || null))),
                      (item.get('subsections') ? item.get('subsections').map(function(item){
                        return h('div', {},
                          h('h2', {},
                            [(item.get('title') ? item.get('title').toUpperCase() + ' ' : null),
                            h('span', {className:'glyphicon gray-font ' +
                              (item.get('privacy') ?
                                (item.get('privacy') == 'public' ?
                                  'glyphicon-globe'
                                : (item.get('privacy') == 'registered' ?
                                  'glyphicon-ok-sign'
                                : (item.get('privacy') == 'private' ?
                                  'glyphicon-lock'
                                :null)))
                              :null)},''
                            )]
                          ),
                          (item.get('title') ?
                            (item.get('title').toLowerCase() == 'releases' ?
                              [h('span', {}, h('a', {href:'#'}, 'Release schedule')),
                              h('br', {}),
                              h('span', {}, h('a', {href:'#'}, 'Next release')),
                              h('span', {}, h('a', {href:'#'}, 'Past releases'))]
                            : (item.get('title').toLowerCase() == 'our blog' ?
                              [h('span', {}, h('a', {href:'#'}, 'Videos')),
                              h('span', {}, h('a', {href:'#'}, 'Articles')),
                              h('span', {}, h('a', {href:'#'}, 'FAQ'))]
                            : (item.get('learning') ?
                              null
                            :   h('span', {}, h('a', {href:'#'}, "[[pages from the section]]")))))
                          :null)
                        );
                      }):null)
                    )
                  )
                );
              }):null)
            )
          )
        )
      ];
  }
})

var BlogPreview = createClass({
  render: function(){
      var entry = this.props.entry;
      var type = entry.getIn(['data', 'type']);
      var date = new Date(entry.getIn(['data', 'date']));
      var day = date.getDay();
      var month = months[date.getMonth()];
      var year = date.getFullYear();
      var dateString = day + ' ' + month + ' ' + year;
      var classSection = null;
      switch (type) {
        case 'blogarticle':
          classSection = 'blog';
          break;
        case 'blogvideo':
          classSection = 'video';
          break;
        default:
          classSection = type;
      }

      return [(entry.getIn(['data', 'thumbnail']) ? smallHeader(entry) : null),
      h('section', {className: classSection + ' reduce-margin'},
        h('div', {className:'container'},
          (entry.getIn(['data', 'videoid']) ?
            h('div', {className:'row justify-content-center'},
              h('div', {className:'col-sm-12 col-md-10 col-lg-8 embed-responsive embed-responsive-16by9'},
                h('iframe', {className:'youtube', src:'https://www.youtube.com/embed/' + entry.getIn(['data', 'videoid']) + '?controls=0', frameborder:'0', allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen:'true'}, '')
              )
          ):null),
          h('div', {className:'row justify-content-center text-left'},
            h('p', {className:'col col-md-10 col-lg-8 publication-date'},
              h('span', {}, 'Published on: '),
              h('span', {}, dateString),
              h('span', {}, ', by: '),
              h('span', {className:'author'}, (entry.getIn(['data', 'author']) || 'None'))
            ),
            h('hr', {className:'w-100'}),
            h('h1', {className:'col col-md-10 col-lg-8'}, entry.getIn(['data', 'title'])),
            h('div', {className:'w-100'}, ),
            h('div', {className:'col col-md-10 col-lg-8 markdown'},
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

CMS.registerPreviewTemplate("knowledgecenterindex", KnowledgeCenterPreview);

CMS.registerPreviewTemplate("blogarticle", BlogPreview);
CMS.registerPreviewTemplate("blogvideo", BlogPreview);
CMS.registerPreviewTemplate("releases", BlogPreview);
CMS.registerPreviewTemplate("releaseschedule", BlogPreview);


CMS.registerPreviewStyle("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/cms.css");
CMS.registerPreviewStyle("/css/fonts.css");
CMS.registerPreviewStyle("/css/creative.css");
CMS.registerPreviewStyle("/css/glyphicons.css");
