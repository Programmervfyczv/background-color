function myBackground() {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    console.log(bgColor);

    document.body.style.background = bgColor;
}

// Call the myBackground function to set a random background color.
myBackground();