function blendColors(colorA, colorB, amount) {
    const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
    const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
    const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
    const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
    return '#' + r + g + b;
}
  
function setBackground() {
    var date = new Date();
    var current_hour = date.getHours();
    // start at Noon
    //Debug
    //current_hour= 24;
    current_hour = Math.abs(current_hour-12);
    // Hacky way to get style sheet
    var styleSheet = document.styleSheets[2];
    // start: #FFC7BD
    // end: #17214C
    var color = blendColors('#6495ed', '#17214C', current_hour/12);
    styleSheet.insertRule('.dynamic-color { background: linear-gradient(360deg,' + color +' 69.86%, rgba(255, 199, 189, 0) 106.09%);', 0);
}
  
window.onload = function(){
     setBackground();
}
