

    // HERO SECTION LOAD
    workObserver.observe(workSection);
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            document.querySelector(".hero").classList.add("show");
        }, 500);
    });


    document.addEventListener("wheel", function(event) {
        event.preventDefault();
        window.scrollBy({
            top: event.deltaY * 1, 
            behavior: "smooth"
        });
    }, { passive: false });
    
    // WHATSAPP MESSAGE
    function sendWhatsAppMessage(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let category = document.getElementById("category").value;
        let message = document.getElementById("message").value;

        // WhatsApp number (without + sign)
        let whatsappNumber = "9632781673";


        // Properly formatted prefilled WhatsApp message
        let whatsappMessage = `Hello, I am ${name}. \nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\n\nMessage:\n${message}`;

        // Encode the message for URL
        let encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp link
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }

     document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollSection = document.querySelector(".scroll-section");

    // Duplicate the content to create an infinite loop
    const duplicateSection = scrollSection.cloneNode(true);
    scrollWrapper.appendChild(duplicateSection);
});
function openSponsorForm() {
    document.getElementById("sponsor-form").style.display = "block";
}

function closeSponsorForm() {
    document.getElementById("sponsor-form").style.display = "none";
}

function sendWhatsApp() {
    let name = document.getElementById("sponsor-name").value;
    let phone = document.getElementById("sponsor-phone").value;
    let email = document.getElementById("sponsor-email").value;
    let message = document.getElementById("sponsor-message").value;

    let whatsappMessage = `Hello, I am interested in sponsoring Karnataka Beary Festival 2025.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    let whatsappURL = `https://wa.me/9632781673?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
}

// whatsap link
document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollSection = document.querySelector(".scroll-section");

    // Duplicate the content to create an infinite loop
    const duplicateSection = scrollSection.cloneNode(true);
    scrollWrapper.appendChild(duplicateSection);
});
function openSponsorForm() {
    document.getElementById("sponsor-form").style.display = "block";
}

function closeSponsorForm() {
    document.getElementById("sponsor-form").style.display = "none";
}

function sendWhatsApp() {
    let name = document.getElementById("sponsor-name").value;
    let phone = document.getElementById("sponsor-phone").value;
    let email = document.getElementById("sponsor-email").value;
    let message = document.getElementById("sponsor-message").value;

    let whatsappMessage = `Hello, I am interested in sponsoring Karnataka Beary Festival 2025.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    let whatsappURL = `https://wa.me/9632781673?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
}

