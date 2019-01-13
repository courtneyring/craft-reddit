`import Mixin from '@ember/object/mixin'`

DataRequestMixin = Mixin.create

  getData: (url, errFn) ->
    return new Promise (resolve, reject) =>
      if window.XMLHttpRequest
        request = new XMLHttpRequest();
      else
        request = new ActiveXObject("Microsoft.XMLHTTP");
      request.open('GET', url, true)
      request.onreadystatechange = () =>
        if request.readyState == 4
          if request.status == 200
            data = JSON.parse(request.responseText)
            return resolve(data)
          else
            errFn()
      request.send()


`export default DataRequestMixin`
