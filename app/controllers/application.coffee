`import Controller, { inject as controller } from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

ApplicationController = Controller.extend

  menubarLinks: (->[
      route: 'subreddit.index'
      label: '/r/analog'
      icon: 'reddit-alien'
    ,
      route: 'subreddit.favorites'
      label: 'favorites (' + @get('favoriteCount') + ')'
      icon: 'heart'
    ]
  ).property('favoriteCount')

  subreddit: controller()

  favoriteCount: alias 'subreddit.favoriteCount'


`export default ApplicationController`
