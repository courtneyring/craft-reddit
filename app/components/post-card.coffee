`import Component from '@ember/component'`
`import { htmlSafe } from '@ember/string'`


PostCard = Component.extend
  classNames: ['post-card']

  style: (->
    htmlSafe("background-image: url(#{@get('postData.imageUrl')})")
  ).property('postData.imageUrl')

  timeFromCreated: (->
    moment.unix(@get('postData.created')).fromNow()
  ).property('postData.created')

  actions:
    toggleFavorite: () ->
      @toggleProperty('postData.isFavorite')

    # undoFavoritePost: () ->
    #   @set('postData.isFavorite', false)

`export default PostCard`
