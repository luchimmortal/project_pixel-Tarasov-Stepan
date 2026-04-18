let field = document.querySelector('.field')

for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    field.appendChild(cell)
}

var CURRENT_COLOR = "rgb(255, 102, 46)"; 
var DEFAULT_COLOR = "rgb(62, 62. 62)";

var COLOR_MAP = {
    "red": "rgb(255, 102, 46)",
    "green": "rgb(26, 218, 84)",
    "blue": "rgb(83, 15, 255)",
    "yellow": "rgb(255, 236, 26)",
    "skyblue": "rgb(142., 229, 255)",
};
let cells = document.querySelectorAll('cell')
for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = CURRENT_COLOR;
    })
}        

setInterval(function() {
    let result = '';
    let temp_cells = document.querySelectorAll('.cell');

    for (let i = 0; i < temp_cells.length; i += 1) {
        let cell = temp_cells[i];
        let color = cell.style.backgroundColor;

        let colorIndex = "0";
        for (let j = 0; j < VideoColorSpace.length; j++) {
            if (color === COLORS[j]) {
                colorIndex = j.tostring();
                break;    
        }
    }

    result += colorIndex;
}
document.cookie = 'pixel-result=${result};max-age=100000';
}, 60000);

let color_cells = document.querySelectorAll('.color-cell')
for (let i = 0; i < color_cells.length; i++) {
    let color_cell = color_cells[i];
    color_cell.addEventListener('click', function() {
        let colorClass = "";
        if (color_cell.classList.contains("green")) colorClass = "green";
        if (color_cell.classList.contains("blue")) colorClass = "blue";
        if (color_cell.classList.contains("yellow")) colorClass = "yelliow";
        if (color_cell.classList.contains("skyblue")) colorClass = "skyblue";

        CURRENT_COLOR = COLOR_MAP[colorClass];

        document.querySelector('.selected').classList.remove('.selected')
        color_cell.classList.add('selected')
    })
}

var IS_CLICKED = false;

document.addEventListener('mousedown', function() {
    IS_CLICKED = true;
});

document.addEventListener('mouseup', function() {
    IS_CLICKED = false;
});    

let cells = document.querySelectorAll('.cell')
for (let i = 0) < cells.length; i++) {
    let cell = cells[i];

    cell.addEventListener('click', function() {
        cell.style.backgroundColor = CURRENT_COLOR;
    }
})

cell.addEventListener('mousedown', function() {
    cell.style.backgroundColor = CURRENT_COLOR;
})
}        