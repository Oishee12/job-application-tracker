let currentTab = 'all';

const tabInactive = ["bg-white"];
const tabActive = ["bg-primary", "text-white"];

const allJob = document.getElementById('all-job');
const allInterview = document.getElementById('all-interview');
const allReject = document.getElementById('all-reject');

function switchedTab(tab){
    const tabs = ["all", "interview", "rejected"];
    for(const t of tabs){
        const tabName = document.getElementById('tab-' + t);
       if(t===tab){
         tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
       }
       else{
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
       }

       const pages = [allJob, allInterview, allReject];
       for(const section of pages){
        section.classList.add('hidden');
       }

       if(tab === "all"){
        allJob.classList.remove('hidden');
       }
       else if(tab === 'interview'){
        allInterview.classList.remove('hidden');
       }
       else{
        allReject.classList.remove('hidden');
       }
    }
}
switchedTab(currentTab);
// 8 shows in the total badge
const total = document.getElementById('total-job');
total.innerText = allJob.children.length;

// event delegation for interview, rejected and delete btn
document.getElementById('all-job').addEventListener('click', function(event){
    const clickedElement  = event.target;
    if(clickedElement.classList.contains('interview')){
       const individualInterview = clickedElement.closest(".job-card");
         allInterview.appendChild(individualInterview);
    }
    if(clickedElement.classList.contains('rejected')){
        const individualRejected = clickedElement.closest(".job-card");
        allReject.appendChild(individualRejected);
    }
    if(clickedElement.classList.contains('delete')){
        
    }
})
