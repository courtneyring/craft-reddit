`import Component from '@ember/component'`

SearchBar = Component.extend
  classNames: ['search-bar']

  focusedOptionIdx: -1

  arrowDownKeyAction: (e) ->
    if !@get('searchOptions.length')
      return
    focusIdx = @get('focusedOptionIdx')
    lastIdx  = @get('searchOptions.length') - 1

    if focusIdx == -1
      @set('focusedOptionIdx', 0)
    else if focusIdx != lastIdx
      @set('focusedOptionIdx', @get('focusedOptionIdx') + 1)


  arrowUpKeyAction: (e) ->
    if !@get('searchOptions.length')
      return
    focusIdx = @get('focusedOptionIdx')
    lastIdx  = @get('searchOptions.length') - 1

    if focusIdx == -1
      @set('focusedOptionIdx', lastIdx)
    else if focusIdx != 0
      @set('focusedOptionIdx', @get('focusedOptionIdx') - 1)


  enterKeyAction: (e) ->
    focusIdx = @get('focusedOptionIdx')
    if focusIdx != -1
      selection = @get('searchOptions').objectAt(focusIdx)
    else
      selection = @get('searchValue')
    @selectAction(selection)
    @resetSearch()


  keyDown: (e) ->
    switch e.key
      when 'ArrowUp'    then @arrowUpKeyAction(e)
      when 'ArrowDown'  then @arrowDownKeyAction(e)
      when 'Enter'      then @enterKeyAction(e)

  resetSearch: () ->
    @setProperties
      searchOptions:    []
      searchValue:      []
      focusedOptionIdx: -1

  actions:
    getDataList: () ->
      if !@get('searchValue')
        @set('searchOptions', null)
        return
      optionList = []
      for option in @get('options')
        if option.toLowerCase().startsWith(@get('searchValue').toLowerCase())
          optionList.push(option)
      @set('searchOptions', optionList.slice(0,3))

    select: (option) ->
      @selectAction(option)
      @resetSearch()


`export default SearchBar`
