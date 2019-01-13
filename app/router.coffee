`import EmberRouter from '@ember/routing/router'`
`import config from './config/environment'`

Router = EmberRouter.extend
  location: config.locationType,
  rootURL: config.rootURL

Router.map ->
  @route 'subreddit', {path: '/r/:subreddit_id', resetNamespace: true}, ->
    @route 'index', {path: '/'},
    @route 'favorites', {path: '/favorites'}

`export default Router`
