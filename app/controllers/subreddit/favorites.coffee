`import Controller, { inject as controller } from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditFavoritesController = Controller.extend

  posts: alias 'model.data'
  subreddit: controller()
  view: alias 'subreddit.view'

  favorites: (->
    @get('posts').filterBy('isFavorite')
  ).property('posts.@each.isFavorite')

`export default SubredditFavoritesController`
