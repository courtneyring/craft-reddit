`import Route from '@ember/routing/route'`

SubredditRoute = Route.extend

  model: (params) ->
    model = {id: params.subreddit_id}
    sourceUrl = 'https://www.reddit.com/r/' + params.subreddit_id + '/.json'

    @_getData(sourceUrl).then (json) =>
      data = @_formatData(json.data.children.getEach('data'))
      model['data'] = data
      return model


  _getData: (url) ->
    return new Promise (resolve, reject) =>
      request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = () =>
        if request.status >= 200 && request.status < 400
          data = JSON.parse(request.responseText)
          return resolve(data)
      request.send()


  _formatData: (data) ->
    modelArr = []
    for d in data
      url = if d.preview then (d.preview.images[0].source.url).replace('&amp;', '&') else ''
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
