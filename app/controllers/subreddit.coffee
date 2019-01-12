`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditController = Controller.extend

  favoriteCount: (->
    @get('model')?.filterBy('isFavorite').length
  ).property('model.@each.isFavorite')

  # posts: alias 'model'


  # firstPost: (->
  #   console.log @get('posts').getEach('title')
  #   @get('posts.firstObject')
  # ).property('posts')
  # # init: () ->
  #   firstPost = @get('posts.firstObject')
  #   console.log firstPost

`export default SubredditController`
