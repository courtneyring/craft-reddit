`import Route from '@ember/routing/route'`
`import DataRequestMixin from '../mixins/data-request-mixin'`
`import ENV from '../config/environment'`

SubredditRoute = Route.extend DataRequestMixin,

  model: (params) ->
    model = {id: params.subreddit_id}
    sourceUrl = 'https://www.reddit.com/r/' + params.subreddit_id + '/.json'

    @getData(sourceUrl, () => window.location.href = ENV.rootURL ).then (json) =>
      data = @_formatData(json.data.children.getEach('data'))
      model['data'] = data
      return model

  _formatData: (data) ->
    modelArr = []
    for d in data
      url = if d.preview then (d.preview.images[0].source.url).replace(/&amp;/g, '&') else ''
      modelArr.push(
        title: d.title,
        author: d.author,
        imageUrl: url,
        score: d.score
        created: d.created_utc
        isFavorite: false
      )
    return modelArr





`export default SubredditRoute`
