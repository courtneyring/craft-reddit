`import Component from '@ember/component'`

`import { inject as service } from '@ember/service'`

PostCard = Component.extend
  classNames:        ['post-card']
  classNameBindings: ['type']

  click: (e) ->
    if !(e.target.classList).contains('fa')
      window.open(@get('postData.url'))

  favoriteService: service()

  isFavorite: (->
    ids = @get('favoriteService.favorites').getEach('id')
    ids.includes(@get('postData.id'))
  ).property('favoriteService.favorites.length', 'postData')

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
