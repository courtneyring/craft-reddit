`import Controller, { inject as controller } from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

ApplicationController = Controller.extend

  subreddit:      controller()
  favoriteCount:  alias 'subreddit.favoriteCount'
  subredditId:    alias 'subreddit.subredditId'

  init: () ->
    url = 'https://www.reddit.com/reddits.json'
    @getData(url).then (json) =>
      data = @formatData(json.data.children.getEach('data'))
      @set('subredditList', data)

  menubarLinks: (->[
      route: 'subreddit.index'
      params: @get('subredditId')
      label: '/r/' + @get('subredditId')
      icon: 'reddit-alien'
    ,
      route: 'subreddit.favorites'
      params: @get('subredditId')
      label: 'favorites (' + @get('favoriteCount') + ')'
      icon: 'heart'
    ]
  ).property('favoriteCount', 'subredditId')

  getData: (url) ->
    return new Promise (resolve, reject) =>
      request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = () =>
        if request.status >= 200 && request.status < 400
          data = JSON.parse(request.responseText)
          return resolve(data)
      request.send()

  formatData: (data) ->
    subredditArr = []
    for d in data
      subredditArr.push(d.display_name)
    subredditArr


  actions:
    transitionToLink: (subredditId) ->
      @transitionToRoute('subreddit.index', subredditId)


`export default ApplicationController`
