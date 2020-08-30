function Ajax(obj) {
    this.xhr = this.create()
    this.request(obj)
    this.change(obj)
}

Ajax.prototype.create = function () {//创建Ajax对象，获得实例化对象
    var xhr;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    return xhr
}

Ajax.prototype.request = function (obj) {
    this.xhr.open(obj.type, obj.url, obj.async)
    this.xhr.send();
}

Ajax.prototype.change = function (obj) {
    let _this = this
    this.xhr.onreadystatechange = function () {
        if (_this.xhr.readyState === 4) {
            if (_this.xhr.status === 200) {
                obj.success(this.responseText)
            }
        }
    }
}