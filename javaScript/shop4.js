function $(id) {
    return document.getElementById(id);
}
function touch() {
    var body = $("body")

    body.addEventListener("touchstart", function (e) {
        startX = e.touches[0].pageX & e.changedTouches[0].pageX;
        body.addEventListener("touchmove", function (e) {
            moveEndX = e.touches[0].pageX & e.changedTouches[0].pageX;
            if (startX > moveEndX) {
                location.href = 'javascript:;'
            } else if(startX < moveEndX){
                location.href = '../shop3.html'
            }
        })
    })
}
touch()