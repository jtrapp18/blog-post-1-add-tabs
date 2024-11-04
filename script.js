
function updateTabContent(selectedTabName) {
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach(tabContent => {
        const tabName = tabContent.id;

        if (tabName === selectedTabName.toLowerCase()) {
            tabContent.classList.add("active-tab");
        } else {
            tabContent.classList.remove("active-tab");
        }
    });
}

function addTabEvents() {
    const tabs = document.querySelectorAll('.tab-names h2');

    // Loop through each <h2> element and attach an event listener
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabName = tab.textContent;
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active-tab'));

            // Add active class to the clicked tab
            tab.classList.add('active-tab');

            updateTabContent(tabName)
        });
    });
}

function logoZoom() {
    const logos = document.querySelectorAll('footer img');

    // Loop through each <h2> element and attach an event listener
    logos.forEach(logo => {
        
        logo.addEventListener("mouseover", function() {
            logo.style.width = "40px";
        });

        logo.addEventListener("mouseout", function() {
            logo.style.width = "30px";
        });
    });
}

window.onload = function () {
    let images = ['cats_under_table', 'cats_on_porch', 'cats_on_couch'];
    let index = 0;
    
    function change() {
        const imgElement = document.querySelector('#cats');
        imgElement.src = `./img/home/${images[index]}.jpg`;
        index > 1 ? index = 0 : index++;
    }

    setInterval(change, 5000);
};

function addScrollEvents() {
    document.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > 100) { // Adjust the threshold as needed
        header.classList.add('minimized');
        } else {
        header.classList.remove('minimized');
        }
    })
}

addTabEvents();
addScrollEvents();
logoZoom();