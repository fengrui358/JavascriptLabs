function parseUrlSearch(url = '') {
    if (url != null) {
        return url.replace(/(^\?)|(&$)/g, '').split('&').reduce((t,v)=>{
            let [key, val] = v.split('=')
            t[key] = decodeURIComponent(val)
            return t
        }, {})
    }

    return null
}

console.log(parseUrlSearch('?age=25&name=TYJ')); // { age: "25", name: "TYJ" }