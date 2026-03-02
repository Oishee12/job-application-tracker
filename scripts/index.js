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

// event delegation for interview, rejected and delete btn
document.getElementById('jobs-container').addEventListener('click', function(event){
    const clickedElement  = event.target;
    const card = clickedElement.closest(".job-card");
    const parent = card.parentNode;
    const status = card.querySelector(".not-applied-btn");

    if(clickedElement.classList.contains('interview')){
         allInterview.appendChild(card);
         status.innerText = "Interview";
         stateUpdate();
    }
    if(clickedElement.classList.contains('rejected')){
        allReject.appendChild(card);
        status.innerText = "Rejected";
        stateUpdate();
    }
    if(clickedElement.classList.contains('delete')){
        parent.removeChild(card);
        stateUpdate();
    }
})

// state function
function stateUpdate(){
    const totalState = document.getElementById('total-state');
    const interviewState = document.getElementById('interview-state');
    const rejectedState = document.getElementById('rejected-state');

    totalState.innerText = allJob.children.length;
    interviewState.innerText = allInterview.children.length;
    rejectedState.innerText = allReject.children.length;
}
stateUpdate();
