const sidebarBtn = document.getElementsByClassName("sidebar-btn")[0];

sidebarBtn.addEventListener("click", function() {
    const sidebar = document.getElementsByClassName("sidebar")[0];

    if(sidebar.classList.contains("active")){
        sidebar.classList.remove("active");
        console.log("Close Sidebar");
    } else {
        sidebar.classList.add("active");
        console.log("Close Sidebar");
    }
});