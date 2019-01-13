`import Component from '@ember/component'`
`import { htmlSafe } from '@ember/string'`
`import { inject as service } from '@ember/service'`

PostCard = Component.extend
  classNames:        ['post-card']
  classNameBindings: ['type']

  favoriteService: service()

  isFavorite: (->
    ids = @get('favoriteService.favorites').getEach('id')
    ids.includes(@get('postData.id'))
  ).property('favoriteService.favorites.length', 'postData')

  style: (->
    htmlSafe("background-image: url(#{@get('postData.imageUrl')})")
  ).property('postData.imageUrl')

  timeFromCreated: (->
    moment.unix(@get('postData.created')).fromNow()
  ).property('postData.created')

  actions:
    toggleFavorite: () ->
      if @get('isFavorite')
        @get('favoriteService').removeFavorite(@get('postData'))
      else
        @get('favoriteService').addFavorite(@get('postData'))


`export default PostCard`
