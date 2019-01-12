`import Route from '@ember/routing/route'`

SubredditRoute = Route.extend

  model: (params) ->
    # @set('subredditId', params.subreddit_id)
    sourceUrl = 'https://www.reddit.com/r/' + params.subreddit_id + '/.json'
    Ember.$.getJSON(sourceUrl).then (data) =>
      data = data.data.children.getEach('data')
      data.shift()

      modelArr = []

      console.log data
      for d in data
        if d.preview
          url = (d.preview.images[0].source.url).replace('&amp;', '&')
        else
          url = ''
        modelArr.push(
          title: d.title,
          author: d.author,
          imageUrl: url,
          score: d.score
          created: d.created_utc
          isFavorite: false
        )
      return {id: params.subreddit_id, data: modelArr}

  # afterModel: (model, transition) ->
  #
  #   console.log transition.params.subreddit.subreddit_id
  #   @set('subredditId', transition.params.subreddit.subreddit_id)

`export default SubredditRoute`
