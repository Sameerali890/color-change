const button = document.querySelectorAll('.button')

const body = document.querySelector('body')


button.forEach(function(button) {

    button.addEventListener('click', function(e){
        if(e.target.id === 'Orange'){
            body.style.backgroundColor = "orange"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "blue"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow"
        }
        if(e.target.id === 'skyblue'){
            body.style.backgroundColor = "skyblue"
        }

    })
});
