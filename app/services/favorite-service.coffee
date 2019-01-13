`import Service from '@ember/service'`
`import { alias } from '@ember/object/computed'`


FavoriteService = Service.extend

  init: () ->
    @set('favorites', [])

  favoriteCount: alias 'favorites.length'

  addFavorite: (obj) ->
    @get('favorites').pushObject(obj)

  removeFavorite: (obj) ->
    obj = @get('favorites').findBy('id', obj.id)
    @get('favorites').removeObject(obj)
    # favoriteToRemove = @get('favorites').findBy('id', id)
    # index = @get('favorites').indexOf(favoriteToRemove)
    # console.log index
    # @get('favorites').splice(index, 1)
    # console.log @get('favorites')


`export default FavoriteService`
