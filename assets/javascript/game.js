var myScore;
var targetScore;
var wins = 0;
var losses = 0;
var blue;
var red;
var green;
var yellow;

// function is used as a placeholder for all generated random number
// These variables will be used in other function
function gennumbers() {
    targetScore = Math.floor(Math.random() * 100) + 19;
    console.log(targetScore)
    myScore = 0
    //blue = Math.floor(Math.random() * 12);
    //console.log(blue)
    //red = Math.floor(Math.random() * 12);
    //console.log(red)
    //yellow = Math.floor(Math.random() * 12);
    //green = Math.floor(Math.random() * 12);
}

// Inserts values generated in gennumbers() in corresponding tags
// Gives the colors a attr tag with the random values
function placeintags() {
    $("#target").text(targetScore)
    $("#yourScore").text(myScore)
    $("#wins").text(wins)
    $("#losses").text(losses)
}

// iterates through the array, inserts that word into button tag
// the value used for attribute is the random number generated
function crystals() {
    var colors = ["Blue", "Red", "Green", "Yellow"]
    colors.forEach(function (i) {
        var crystalcolor = $("<button>")
        crystalcolor.addClass('Btn')
        crystalcolor.attr("id", i)
        crystalcolor.attr("value", Math.floor(Math.random() * 12))
        $(crystalcolor).text(i)
        $("#buttons").append(crystalcolor)
    })
}

// This function clears everything under buttons div.
// Was going to use it before but decided not to
function clear() {
    $("#buttons").empty()
}

// This function changes the value tags once user has reached score
function changeattr() {
        $("#Blue").attr("value", Math.floor(Math.random() * 12))
        $("#Red").attr("value", Math.floor(Math.random() * 12))
        $("#Green").attr("value", Math.floor(Math.random() * 12))
        $("#Yellow").attr("value", Math.floor(Math.random() * 12))

}
// $("#losses").text(losses)
// $("#blue").attr("value", blue)
// $("#red").attr("value", red)
// $("#green").attr("value", green)
//$("#yellow").attr("value", yellow)

//---------------------------CODE--------------------------
gennumbers()

placeintags()

crystals()

$(".Btn").click(function () {
    
    var score = $(this).attr("value");
    console.log(score)
    myScore = myScore + parseInt(score)
    $("#yourScore").text(myScore)
    
    if (myScore === targetScore) {
        wins = wins + 1
        changeattr()
        gennumbers()
        placeintags()
    }
    else if (myScore > targetScore) {
        losses = losses + 1
        changeattr()
        gennumbers()
        placeintags()
    }
})





