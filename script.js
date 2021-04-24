// Bring the elements

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'She believe she could.. so she did' ;

let idx= 1;

let speed= 300 / speedEl.value;

writeText()

// Function auto-text using .slice method()

function writeText() {
    textEl.innerText = text.slice(0, idx) //.slice method for array (indexStart, indexEnd)

    idx++

    if(idx > text.length) {
        idx=1 
    }


    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)