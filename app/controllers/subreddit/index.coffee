`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditIndexController = Controller.extend

  posts: alias 'model.data'

`export default SubredditIndexController`
