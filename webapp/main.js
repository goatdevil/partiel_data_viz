var value = 0;
display();
function display() {
    document.getElementById("counter").innerHTML=value;
}
function decrease() {
    value--;
    display()
}

function increase() {
    value++;
    display()
}

function reset() {
    value=0;
    display()
}