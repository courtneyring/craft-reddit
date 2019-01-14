`import Component from '@ember/component'`

`import { inject as service } from '@ember/service'`

PostCard = Component.extend
  classNames:        ['post-card']
  classNameBindings: ['type']

  click: (e) ->
    if window.innerWidth < 1024
      target = e.target
      # console.log target.classList.contains('post-card__body')
      while target
        if (target.classList).contains('post-card__body')
          window.open(@get('postData.url'))
        else if (target.classList).contains('post-card')
          break
        target = target.parentNode
        # console.log target

    else if window.innerWidth >= 1024 && !(e.target.classList).contains('fa')
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
