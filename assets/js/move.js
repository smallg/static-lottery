function move(obj, json, options) {
    options = options || {};
    var duration = options.duration || 500;
    var easing = options.easing || 'swing';
    $(obj).animate(json, duration, easing)
}












