`import Controller, { inject as controller } from '@ember/controller'`
`import { alias, filterBy } from '@ember/object/computed'`
`import { inject as service } from '@ember/service'`

SubredditFavoritesController = Controller.extend

  # posts:     alias 'model.data'
  subreddit: controller()
  view:      alias 'subreddit.view'
  # favorites: filterBy 'posts', 'isFavorite'

  favoriteService: service()
  favorites:       alias 'favoriteService.favorites'


`export default SubredditFavoritesController`
