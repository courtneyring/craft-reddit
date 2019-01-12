`import Controller, { inject as controller } from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

ApplicationController = Controller.extend

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

  subreddit: controller()

  favoriteCount: alias 'subreddit.favoriteCount'
  subredditId: alias 'subreddit.subredditId'




`export default ApplicationController`
