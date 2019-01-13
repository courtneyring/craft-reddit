`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditController = Controller.extend

  subredditId: alias 'model.id'
  view:        'card'

  actions:
    setView: (selectedView) ->
      @set('view', selectedView)

`export default SubredditController`
