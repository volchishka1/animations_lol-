var direction = "right"
var offset = 0
var intervalLength = 120
var clicks = 0

$("#heading").offset({ top: offset, left: offset })

var moveHeading = function () {
    if (direction === "right") {
        $("#heading").offset({ left: offset })
        offset++;
        if (offset > 200) {
            offset = 0
            direction = "down"
        }
    } else if (direction === "down") {
        $("#heading").offset({ top: offset })
        offset++;
        if (offset > 200) {
            offset = 200
            direction = "left"
        }
    } else if (direction === "left") {
        $("#heading").offset({ left: offset })
        offset--;
        if (offset < 0) {
            offset = 200
            direction = "top"
        }
    } else if (direction === "top") {
        $("#heading").offset({ top: offset })
        offset--;
        if (offset < 0) {
            offset = 0
            direction = "right"
        }
    } 
}
var intervalId = setInterval(moveHeading, intervalLength)

$("#heading").click(function () {
    clearInterval(intervalId)
    intervalLength /= 2
    clicks++

    if(clicks > 10) {
        $("#heading").text("Накликал-таки!")
    } else {
        intervalId = setInterval(moveHeading, intervalLength)
    }
})
// setInterval(moveHeading, 30)

