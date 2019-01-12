`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditIndexController = Controller.extend

  posts: alias 'model'

`export default SubredditIndexController`
