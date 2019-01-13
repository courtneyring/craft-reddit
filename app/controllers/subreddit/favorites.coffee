`import Controller, { inject as controller } from '@ember/controller'`
`import { alias, filterBy } from '@ember/object/computed'`

SubredditFavoritesController = Controller.extend

  posts:     alias 'model.data'
  subreddit: controller()
  view:      alias 'subreddit.view'
  favorites: filterBy 'posts', 'isFavorite'


`export default SubredditFavoritesController`
