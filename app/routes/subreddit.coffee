`import Route from '@ember/routing/route'`

SubredditRoute = Route.extend

  model: (params) ->
    sourceUrl = 'https://www.reddit.com/r/' + params.subreddit_id + '/.json'
    Ember.$.getJSON(sourceUrl).then (data) =>
      data        = data.data.children.getEach('data')
      modelArr = []
      data.shift()

      console.log data
      for d in data
        url = (d.preview.images[0].source.url).replace('&amp;', '&')
        modelArr.push({imageUrl: url})
      return modelArr

`export default SubredditRoute`
