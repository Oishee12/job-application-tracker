let currentTab = 'all';
const tabInactive = ["bg-white"];
const tabActive = ["bg-primary", "text-white"];
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
    }
}
switchedTab(currentTab);