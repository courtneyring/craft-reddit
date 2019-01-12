`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditFavoritesController = Controller.extend

  posts: alias 'model.data'

  favorites: (->
    @get('posts').filterBy('isFavorite')
  ).property('posts.@each.isFavorite')

`export default SubredditFavoritesController`
