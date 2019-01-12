`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditFavoritesController = Controller.extend

  posts: alias 'model'

  favorites: (->
    console.log @get('posts').filterBy('isFavorite')
    @get('posts').filterBy('isFavorite')
  ).property('posts.@each.isFavorite')

`export default SubredditFavoritesController`
