Card = function (a, b) {
    this.suit = a
    this.face = b
};

function submit() {
    Card.suit = document.getElementById("suit").value
    Card.face = document.getElementById("face").value
    var output = "Suit: " + Card.suit + "<br>" + "Face: " + Card.face;
    document.getElementById("result").innerHTML = output;
}

var cardArray01 = ["Diamond", "Heart", "Spade", "Club"]
var cardArray02 = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Ace"]

function shuffle(array) {
    var i, j, temp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    }
    return array
}

function sResult() {
    var sArray01 = shuffle(cardArray01);
    var sArray02 = shuffle(cardArray02);
    Card.suit = sArray01.slice(0, 1)
    Card.face = sArray02.slice(0, 1) 
    var output = "Suit: " + Card.suit + "<br>" + "Face: " + Card.face;
    document.getElementById("result").innerHTML = output;
}