(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // Event Start & End Dates (Fixed to 2025)
    const eventStart = new Date("April 18, 2025 14:00:00").getTime(); // April 18, 2025, 2 PM
    const eventEnd = new Date("April 20, 2025 23:59:59").getTime();   // April 20, 2025, 11:59 PM

    const x = setInterval(function () {
        const now = new Date().getTime(),
            distanceToStart = eventStart - now,
            distanceToEnd = eventEnd - now;

        if (distanceToStart > 0) {
            // Countdown before event starts
            document.getElementById("days").innerText = Math.floor(distanceToStart / day);
            document.getElementById("hours").innerText = Math.floor((distanceToStart % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distanceToStart % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distanceToStart % minute) / second);
        } else if (distanceToEnd > 0) {
            // Event is live (April 18 - April 20)
            document.getElementById("headline").innerText = "Beary Mela is Live!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("content").innerText = "Welcome to Beary Mela!";
        } else {
            // Event is over (After April 20)
            document.getElementById("headline").innerText = "The Event Has Ended";
            document.getElementById("content").style.display = "none";
            clearInterval(x);
        }
    }, 1000);
})();
// Initialize ScrollReveal
const sr = ScrollReveal({
    reset: false, // Ensures it only animates once
    distance: '60px', // Slightly increased for a smoother effect
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out'
});

// Event Gallery Animations
sr.reveal('.event-heading', { origin: 'top', delay: 200 });
sr.reveal('.event-card', { origin: 'bottom', delay: 300, interval: 150 });
// ==================================
  
  var preloader = document.getElementById('loader');
  window.addEventListener("load", function(){
    setTimeout(function() {
      loader.style.display = 'none';
    }, 3000); // 2000 milliseconds (2 seconds) delay
  });

    // counting number script
    const workSection = document.querySelector(".section-work-data");
    const workObserver = new IntersectionObserver(
        (entries, observer) => {
            const [entry] = entries;

            if (!entry.isIntersecting) return;

            const counterNums = document.querySelectorAll(".counter-numbers");
            const speed = 200;

            counterNums.forEach((curElem) => {
                const targetNumber = parseInt(curElem.dataset.number);
                const updateNumber = () => {
                    const initialNum = parseInt(curElem.innerText);
                    const incrementNumber = Math.ceil(targetNumber / speed);

                    if (initialNum < targetNumber) {
                        if (curElem.dataset.number === "2005") {
                            curElem.innerText = Math.min(initialNum + incrementNumber, targetNumber);
                        } else {
                            curElem.innerText = `${initialNum + incrementNumber}+`;
                        }
                        if (initialNum + incrementNumber < targetNumber) {
                            setTimeout(updateNumber, 10);
                        }
                    }
                };

                updateNumber();
            });

            observer.unobserve(workSection);
        }, {
            root: null,
            threshold: 0,
        }
    );

    workObserver.observe(workSection);
