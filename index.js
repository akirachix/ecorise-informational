submit = document.getElementById('submit-form').addEventListener('submit',
    function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const location = document.getElementById('location').value;
        console.log('name')
        console.log('location')
        this.reset();
    });



    
