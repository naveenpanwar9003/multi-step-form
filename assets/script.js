document.addEventListener('DOMContentLoaded', function(){


    // Get all the necessary elements
    const  formContainer = document.querySelector('#form-container');
    const  nextBtn = document.querySelector('#next-btn'); 
    const  prevBtn = document.querySelector('#prev-btn'); 
    let step = 1;

    // Next btn evet listener
    nextBtn.addEventListener('click', function(){
        step == 4 ? false : ''; 
        step++;
        formContainer.setAttribute('data-step', `${step}`);
    })

    // Prev btn Event Listener
    prevBtn.addEventListener('click', function(){
        
        step == 1 ? false : '' ;
        step--;
        formContainer.setAttribute('data-step', `${step}`);
    })
})