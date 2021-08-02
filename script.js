// x.addEventListener('click', function() {

// })

function checkToggle() {
    var x = document.getElementById('mycheck');
    if (x.checked) {
        x.classList.add('checked')
        window.location.replace("file:///C:/Users/96560/Desktop/practice%20projects/languages-toggler/En.html")
    } else {
        x.classList.remove('checked')
        window.location.replace("file:///C:/Users/96560/Desktop/practice%20projects/languages-toggler/index.html")
    }
}