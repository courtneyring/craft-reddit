`import Controller from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditController = Controller.extend

  posts: alias 'model'



`export default SubredditController`
