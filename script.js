const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');

let i = 0;

xIcon.addEventListener('click', function() {
    typeNote();
});

checkIcon.addEventListener('click', function() {
    createNote();
});

function typeNote() {
    if(container3.style.display === 'none' || container3.style.display === '') {
        container3.style.display = 'block';
    }else{
        container3.style.display = 'none';
    }
}

function createNote() {
    let noteText = document.getElementById('note-text').value;
    let node0 = document.createElement('div');
    let node1 = document.createElement('h1');
    
    node1.setAttribute("style", "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow:hidden; box-shadow: 0px 10px 24px 0px; rgba(0, 0, 0, 0.75)");
    
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node1.innerHTML = noteText;
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend', node0);

    node0.addEventListener('mouseenter', function() {
        node0.style.transform = "scale(1.1)";
    });

    node0.addEventListener('mouseleave', function() {
        node0.style.transform = "scale(1)";
    });

    node0.addEventListener('dblclick', function() {
        node0.remove();
    });

    document.getElementById('note-text').value = '';
}

function margin() {
    let randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
    let randomRotate = ["3", "1", "-1", "-3", "-5", "-10"];
    return "rotate("+ randomRotate[Math.floor(Math.random() * randomRotate.length)] +"deg)";
}

function color() {
    let randomColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"]
    if(i === randomColor.length) {
        i = 0;
    }
    return randomColor[i++];
}
