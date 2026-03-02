let currentTab = 'all';

const tabInactive = ["bg-white"];
const tabActive = ["bg-primary", "text-white"];

// three buttons and no job sections
const allJob = document.getElementById('all-job');
const allInterview = document.getElementById('all-interview');
const allReject = document.getElementById('all-reject');
const noJob = document.getElementById('no-jobs-available');

// three states and updated states
const totalState = document.getElementById('total-state');
const interviewState = document.getElementById('interview-state');
const rejectedState = document.getElementById('rejected-state');
const updatedState = document.getElementById('updated-state');

function switchedTab(tab) {
    currentTab = tab;
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById('tab-' + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }

        const pages = [allJob, allInterview, allReject];
        for (const section of pages) {
            section.classList.add('hidden');
        }

        noJob.classList.add('hidden');

        if (tab === "all") {
            allJob.classList.remove('hidden');
            if (allJob.children.length < 1) {
                noJob.classList.remove('hidden');
            }
        }
        else if (tab === 'interview') {
            allInterview.classList.remove('hidden');
            if (allInterview.children.length < 1) {
                noJob.classList.remove('hidden');
            }
        }
        else {
            allReject.classList.remove('hidden');
            if (allReject.children.length < 1) {
                noJob.classList.remove('hidden');
            }
        }
    }
    stateUpdate();
}
switchedTab(currentTab);

// event delegation for interview, rejected and delete btn
document.getElementById('jobs-container').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".job-card");
    const parent = card.parentNode;
    const status = card.querySelector(".not-applied-btn");

    if (clickedElement.classList.contains('interview')) {
        allInterview.appendChild(card);
        status.innerText = "Interview";
    }
    if (clickedElement.classList.contains('rejected')) {
        allReject.appendChild(card);
        status.innerText = "Rejected";
    }
    if (clickedElement.classList.contains('delete')) {
        parent.removeChild(card);
    }
    stateUpdate();
})

// state function
function stateUpdate() {
 const counts = {
        all: allJob.children.length,
        interview: allInterview.children.length,
        rejected: allReject.children.length,
    };
    totalState.innerText = counts.all;
    interviewState.innerText = counts.interview;
    rejectedState.innerText = counts.rejected;

    updatedState.innerText = counts[currentTab];
    if(counts[currentTab] < 1){
        noJob.classList.remove('hidden');
    }
    else{
        noJob.classList.add('hidden');
    }

}
stateUpdate();
