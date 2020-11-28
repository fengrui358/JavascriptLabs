(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('https://static001.geekbang.org/static/js/manifest.39cf4c942e2653af487c.js', function () {
    loadJS('https://static001.geekbang.org/static/js/vendor.54effc2643fbf9a138fd.js', function () {
      loadJS('https://static001.geekbang.org/static/js/app.47f7c616e303ac0d56ef.js')
    })
  })
})()

