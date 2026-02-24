// document.getElementById('first-job-interview').addEventListener('click', function(){
//     const hidden = document.getElementById('first-job-interview-hidden');
//     hidden.classList.remove('hidden');
//     const show = document.getElementById('first-job-interview-show');
//     show.classList.add('hidden');
// })
function hiddenAndShow(btnId, hiddenId, showId){
document.getElementById(btnId)
.addEventListener('click', function(){
    const hidden = document.getElementById(hiddenId);
    hidden.classList.remove('hidden');
    const show = document.getElementById(showId);
    show.classList.add('hidden');
})
}