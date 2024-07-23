
document.querySelectorAll('img').forEach((img) => {
    img.style.display = 'none';
})

document.querySelectorAll('.error-paragraph').forEach((err) => {
    err.style.display = 'none';
})

const submit = document.getElementById("submit-button");

submit.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('input').forEach(input => {
        if (input.value == "") {

            document.querySelectorAll('img').forEach((img) => {
                img.style.display = 'block';
            })
            
            document.querySelectorAll('.error-paragraph').forEach((err) => {
                err.style.display = 'block';
            })
        } else {
            document.querySelectorAll('img').forEach((img) => {
                img.style.display = 'none';
            })
            
            document.querySelectorAll('.error-paragraph').forEach((err) => {
                err.style.display = 'none';
            })

        }
    })
    document.querySelectorAll('input').forEach(input => {
        input.value = "";
    })
})