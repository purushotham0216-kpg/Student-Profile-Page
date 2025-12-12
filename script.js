const dashboard = document.getElementById("dashboardPage");
const profile = document.getElementById("profilePage");

document.getElementById("profileBtn").addEventListener("click", () => {
    dashboard.classList.remove("active");
    profile.classList.add("active");
});

document.getElementById("dashboardBtn").addEventListener("click", () => {
    profile.classList.remove("active");
    dashboard.classList.add("active");
});



document.getElementById("editBioBtn").addEventListener("click", () => {
    let newBio = prompt("Enter new bio:");
    if (newBio && newBio.trim()) {
        document.getElementById("bio").textContent = newBio.trim();
    }
});

document.getElementById("addSkillBtn").addEventListener("click", () => {
    let skill = prompt("Enter new skill:");
    if (skill && skill.trim()) {
        let li = document.createElement("li");
        li.textContent = skill.trim();
        document.getElementById("skillList").appendChild(li);
    }
});