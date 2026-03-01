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