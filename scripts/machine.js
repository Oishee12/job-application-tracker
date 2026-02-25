// document.getElementById('first-job-interview').addEventListener('click', function(){
//     const hidden = document.getElementById('first-job-interview-hidden');
//     hidden.classList.remove('hidden');
//     const show = document.getElementById('first-job-interview-show');
//     show.classList.add('hidden');
// })


function hiddenAndShow(btnId, hiddenId, showId, showId2, btnId2){
document.getElementById(btnId)
.addEventListener('click', function(){
    const hidden = document.getElementById(hiddenId);
    hidden.classList.remove('hidden');
    const show = document.getElementById(showId);
    show.classList.add('hidden');
     const show2 = document.getElementById(showId2);
    show2.classList.add('hidden');

    const initialValue = document.getElementById(btnId2);
    if(!this.dataset.clicked){
        initialValue.innerText = Number(initialValue.innerText) + 1;
        this.dataset.clicked = 'true';
    }
    
})
}

