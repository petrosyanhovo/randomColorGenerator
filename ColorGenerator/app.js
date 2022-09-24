const colors = ["green", "red", "rbga(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// const body = document.querySelector('body')

/*
btn.addEventListener("click", function (firstRGB, secondRGB, thirdRGB) {
    let myRGB = "rgb(";
    let myRGBArray = [];
    const first = getRandomRGB();
    const second = getRandomRGB();
    const third = getRandomRGB();
    myRGBArray.push(first, second, third);
    let myRGBStr = myRGBArray.join(",");
    myRGB += myRGBStr + ")";
    console.log(myRGB);
    document.body.style.backgroundColor = myRGB;
});
*/

btn.addEventListener("click", function (firstRGB, secondRGB, thirdRGB) {
    const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    color.textContent = rgb;

    document.body.style.backgroundColor = rgb;
});

//////// COPY COLOR
color.onclick = function () {
    document.execCommand("copy");
};

color.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", color.textContent);
        console.log(event.clipboardData.getData("text"));
    }
});
