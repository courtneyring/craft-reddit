`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditController = Controller.extend

  subredditId: alias 'model.id'
  view:        'card'

  favoriteCount: (->
    @get('model.data')?.filterBy('isFavorite').length
  ).property('model.data.@each.isFavorite')

  actions:
    setView: (selectedView) ->
      @set('view', selectedView)

`export default SubredditController`
