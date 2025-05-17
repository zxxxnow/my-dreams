/**Written by Lil Dream */    
    
    /*sIDE bar*/
    document.getElementById("toggleSidebar").addEventListener("click", function () {
        const sidebar = document.getElementById("sidebar");
        const icon = document.getElementById("toggleSidebar");
        sidebar.classList.toggle("collapsed");
        icon.classList.add("wobble");
        setTimeout(() => icon.classList.remove("wobble"), 500);
    });

    /* Countdowns */
    const arrivalDate = new Date("2024-05-08");
    const finalDate = new Date("2025-10-31");
    const startRoadDate = new Date("2025-07-15");
    const today = new Date();

    const totalTime = finalDate - arrivalDate;
    const elapsedTime = today - arrivalDate;
    const totalDays = Math.ceil(totalTime / (1000 * 60 * 60 * 24));
    const elapsedDays = Math.max(0, Math.ceil(elapsedTime / (1000 * 60 * 60 * 24)));
    const percentComplete = Math.min(100, Math.round((elapsedDays / totalDays) * 100));

    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.getElementById("progress-text");
    progressBar.style.width = percentComplete + "%";
    progressBar.setAttribute("aria-valuenow", percentComplete);
    progressBar.innerText = percentComplete + "%";
    progressText.innerText = `Day ${elapsedDays} / ${totalDays} — ${percentComplete}% Complete`;

    const countdownEl = document.getElementById("countdown");
    const todayEl = document.getElementById("today-date");

    const diffTime = finalDate - today;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const roadTime = startRoadDate - today;
    const roadDays = Math.floor(roadTime / (1000 * 60 * 60 * 24));
    const roadHours = Math.floor((roadTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    countdownEl.innerHTML =
      `${diffDays} days and ${diffHours} hours left for the end of the world<br>` +
      `${roadDays} days and ${roadHours} hours left before the road begins`;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    todayEl.innerText = "Today is " + today.toLocaleDateString(undefined, options);