`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditController = Controller.extend

  favoriteCount: (->
    @get('model.data')?.filterBy('isFavorite').length
  ).property('model.data.@each.isFavorite')

  subredditId: alias 'model.id'

  view: 'card'

  actions:
    setView: (selectedView) ->
      @set('view', selectedView)

    # setSort: () ->
    #   @set('sort', sortBy(document.getElementById('sort-select').value))


`export default SubredditController`
