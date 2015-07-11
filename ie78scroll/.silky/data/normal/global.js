module.exports = {
    "title": "Silky",
    "root": "",
    "subtitle": "这里是全局调用，通过<b>_.global.subtitle可以调用</b>",
    "keyword": "keyword",
    "description": "description",
    "footer": {
        "copyright": "HunanTV.com"
    },
    "linkCSS": {
        "baseUrl": "<global.root>/css/",
        "dir": "/css",
        "match": /\.css|less$/,
        path: /(less)$/,
        to: 'css'
    },
    "__js":"/js/",
    "__css":"/css/",
    "__img":"/image/",
    "__base_url":"/",
    func: function(){
        return [
            Math.random(),
            Math.random()
        ]
    },
    plus: function(left, right){
        return left + right;
    },
    isOldMan: function(age){
        return (age >= 60)
    }
}