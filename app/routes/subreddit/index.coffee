`import Route from '@ember/routing/route'`

SubredditRoute = Route.extend {}

  # model: (params) ->
  #   sourceUrl = 'https://www.reddit.com/r/' + params.subreddit_id + '/.json'
  #   Ember.$.getJSON(sourceUrl).then (data) =>
  #     data = data.data.children.getEach('data')
  #     data.shift()
  #
  #     modelArr = []
  #
  #     console.log data
  #     for d in data
  #       url = (d.preview.images[0].source.url).replace('&amp;', '&')
  #       modelArr.push(
  #         title: d.title,
  #         author: d.author,
  #         imageUrl: url,
  #         created: d.created_utc
  #         isFavorite: false
  #       )
  #     return modelArr

`export default SubredditRoute`
