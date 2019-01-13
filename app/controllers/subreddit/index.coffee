`import Controller, { inject as controller }  from '@ember/controller'`
`import { alias } from '@ember/object/computed'`

SubredditIndexController = Controller.extend

  posts:     alias 'model.data'
  subreddit: controller()
  view:      alias 'subreddit.view'


`export default SubredditIndexController`
