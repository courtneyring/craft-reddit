`import Component from '@ember/component'`
`import { htmlSafe } from '@ember/string'`

LazyImage = Component.extend
  classNames:        ['lazy-image']

  handleViewChange: (->
    @isInViewport()
  ).observes('type')

  didInsertElement: () ->
    @isInViewport()
    window.addEventListener('scroll', @isInViewport.bind(@))

  willDestroyElement: () ->
    window.removeEventListener('scroll',  @isInViewport)

  isInViewport: () ->
    if !this.element
      return
    bounding = this.element.getBoundingClientRect();
    isVisible =  bounding.bottom >= 0 && \
        bounding.left >= 0 && \
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) && \
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    if isVisible && !@get('loaded')
      @loadImage()

  loadImage: () ->
      @set('loaded', false)
      img = new Image()
      img.onload = () =>
        @setProperties
          loaded: true
          style: htmlSafe("background-image: url(#{@get('url')}); opacity: 1")
      img.src = @get('url')

`export default LazyImage`
