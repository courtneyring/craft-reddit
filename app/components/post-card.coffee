`import Component from '@ember/component'`
`import { htmlSafe } from '@ember/string'`

PostCard = Component.extend
  classNames: ['post-card']

  style: (->
    htmlSafe("background-image: url(#{@get('data.imageUrl')})")
  ).property('data.imageUrl')

`export default PostCard`
