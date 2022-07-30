const boxes = document.querySelectorAll(".container .box");

shuffleBoxes(boxes);

boxes.forEach(box => {
    box.onclick = function(e) {
        toggleColor(box);
        const adjacentElemIds = adjecentElementMap[box.id];
        if(adjacentElemIds !== undefined && adjacentElemIds !== null) {
            adjacentElemIds.forEach(adjacentElemId => {
                const adjacentBox = document.getElementById(adjacentElemId);
                toggleColor(adjacentBox);
            })
        }

        checkIfSuccess(boxes);
    }
})


adjecentElementMap = {
    '1': ['2', '6'],
    '2': ['1', '3', '7'],
    '3': ['2', '4', '8'],
    '4': ['3', '5', '9'],
    '5': ['4', '10'],
    '6': ['1', '7', '11'],
    '7': ['2', '6', '8', '12'],
    '8': ['3', '7', '9', '13'],
    '9': ['4', '8', '10', '14'],
    '10': ['5', '9', '15'],
    '11': ['6', '12', '16'],
    '12': ['7', '11', '13', '17'],
    '13': ['8', '12', '14', '18'],
    '14': ['9', '13', '15', '19'],
    '15': ['10', '14', '20'],
    '16': ['11', '17', '21'],
    '17': ['12', '16', '18', '22'],
    '18': ['13', '17', '19', '23'],
    '19': ['14', '18', '20', '24'],
    '20': ['15', '19', '25'],
    '21': ['16', '22'],
    '22': ['17', '23', '21'],
    '23': ['18', '24', '22'],
    '24': ['19', '25', '23'],
    '25': ['20', '24'],
}

function shuffleBoxes(boxes) {
    boxes.forEach(box => {
        if(Math.random() < 0.3) {
            box.classList.add("on");
        }
    });
}

function toggleColor(box) {
    if (box.classList.contains("on")) {
        box.classList.remove("on");
    } else {
        box.classList.add("on");
    }
}

function checkIfSuccess(boxes) {
    const onBoxes = Array.from(boxes).filter(box => {
        return box.classList.contains("on");
    });

    const successed = onBoxes.length == 25;
    
    if(successed) {
        alert('성공하셨습니다!');
    }
}
