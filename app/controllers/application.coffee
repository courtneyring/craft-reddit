`import Controller, { inject as controller } from '@ember/controller'`
`import { alias } from '@ember/object/computed'`
`import DataRequestMixin from '../mixins/data-request-mixin'`

ApplicationController = Controller.extend  DataRequestMixin,

  subreddit:      controller()
  favoriteCount:  alias 'subreddit.favoriteCount'
  subredditId:    alias 'subreddit.subredditId'

  init: () ->
    url = 'https://www.reddit.com/reddits.json'
    @getData(url, () => return resolve()).then (json) =>
      data = @formatData(json.data.children.getEach('data'))
      @set('subredditList', data)

  menubarLinks: (->[
      route:  'subreddit.index'
      params: @get('subredditId')
      label:  '/r/' + @get('subredditId')
      icon:   'reddit-alien'
    ,
      route:  'subreddit.favorites'
      params: @get('subredditId')
      label:  'favorites (' + @get('favoriteCount') + ')'
      icon:   'heart'
    ]
  ).property('favoriteCount', 'subredditId')


  formatData: (data) ->
    subredditArr = []
    for d in data
      subredditArr.push(d.display_name)
    subredditArr


  actions:
    transitionToLink: (subredditId) ->
      @transitionToRoute('subreddit.index', subredditId)


`export default ApplicationController`
