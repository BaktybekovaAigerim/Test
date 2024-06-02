function countCharacters() {

    var text = document.getElementById("inputText").value;
    var count = text.length;
    document.getElementById("characterCount").innerHTML = "Всего: " + count;

    if (count >= 60) {

        document.getElementById("inputText").value = text.slice(0, 60);
        document.getElementById("remainingCharacters").innerHTML = "Осталось: 0";
        document.getElementById("inputText").setAttribute("maxlength", "60");
    } else {

        document.getElementById("remainingCharacters").innerHTML = "Осталось: " + (60 - count);
    }
}