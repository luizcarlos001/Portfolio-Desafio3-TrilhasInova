document.getElementById('hamburger-menu').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var name = "Luiz Carlos";
    var typedName = document.getElementById("typed-name");
    var index = 0;
    var speed = 100; 

    function type() {
        if (index < name.length) {
            typedName.textContent += name.charAt(index);
            index++;
            var randomSpeed = Math.random() * 150 + 50; 
            setTimeout(type, randomSpeed);
        }
    }

    type();
});