// Hero Slideshow
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slide-nav'); // Navigation dots container
let currentSlide = 0;
let slideInterval;

// Ensure there are slides
if (slides.length > 0) {
    createDots(); // Generate navigation dots
    showSlide(currentSlide); // Show the first slide
    startAutoSlide(); // Start the slideshow
}

// Function to create dots dynamically
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active'); // First dot is active
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.classList.toggle('fade', i === index);
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to navigate to a specific slide
function goToSlide(index) {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    showSlide(index);
    startAutoSlide(); // Restart auto-slide
}

// Start auto-slide
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}


// Smooth Infinite Artwork Slider
const artworkSlider = document.querySelector('.artwork-slider');
const artworkContainer = document.querySelector('.artwork-container');
const artworkSlides = document.querySelectorAll('.artwork-slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 1; // Start at 1 because of the prepended clone
const visibleSlides = 1;
const slideWidth = artworkSlides[0].offsetWidth + 20; // 20px for margin

// Clone first and last slides
const firstClone = artworkSlides[0].cloneNode(true);
const lastClone = artworkSlides[artworkSlides.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

artworkContainer.appendChild(firstClone);
artworkContainer.insertBefore(lastClone, artworkSlides[0]);

// Update slides NodeList after cloning
const allSlides = artworkContainer.querySelectorAll('.artwork-slide');

function setTransition(enable) {
    artworkContainer.style.transition = enable ? 'transform 0.5s cubic-bezier(.77,0,.18,1)' : 'none';
}

function updateSlider() {
    setTransition(true);
    artworkContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Handle transition end for infinite effect
artworkContainer.addEventListener('transitionend', () => {
    if (allSlides[currentIndex].classList.contains('clone')) {
        setTransition(false);
        if (currentIndex === 0) {
            currentIndex = allSlides.length - 2;
        } else if (currentIndex === allSlides.length - 1) {
            currentIndex = 1;
        }
        artworkContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex >= allSlides.length - 1) return;
    currentIndex++;
    updateSlider();
});

// Responsive adjustment
window.addEventListener('resize', () => {
    artworkContainer.style.transition = 'none';
    artworkContainer.style.transform = `translateX(-${currentIndex * (artworkSlides[0].offsetWidth + 20)}px)`;
});

setTimeout(() => {
    updateSlider();
}, 10); // Wait for DOM update



document.getElementById("submissionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    let errors = [];
  
    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const tags = document.getElementById("tags").value.trim();
    const file = document.getElementById("fileUpload").files[0];
    const aiGenerated = document.querySelector('input[name="aiGenerated"]:checked');
  
    // 1. Email validation (must contain "@" and ".")
    if (!email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email.");
    }
  
    // 2. Title validation (must be at least 3 characters)
    if (title.length < 3) {
      errors.push("Title must be at least 3 characters long.");
    }
  
    // 3. Description validation (must not be empty)
    if (description === "") {
      errors.push("Description cannot be empty.");
    }
  
    // 4. Tags validation (must contain at least one tag)
    if (tags.split(",").filter(tag => tag.trim() !== "").length === 0) {
      errors.push("Please enter at least one tag.");
    }
  
    // 5. File validation (must be selected)
    if (!file) {
      errors.push("Please upload a file.");
    }
  
    // 6. AI radio button validation
    if (!aiGenerated) {
      errors.push("Please indicate if the work is AI-generated.");
    }
  
    const errorBox = document.getElementById("errorMessages");
    errorBox.innerHTML = "";
  
    if (errors.length > 0) {
      errorBox.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
    } else {
      alert("Form submitted successfully!");
      this.reset();
    }
  });
  












const discussions = [
  { title: "Tips for Digital Art Beginners", user: "Sarah Chen", replies: 24 },
  { title: "Best Drawing Tablets 2025", user: "John Ellis", replies: 18 },
  { title: "Color Theory Simplified", user: "Alice Thompson", replies: 32 },
];

const discussionList = document.getElementById("discussionList");

discussions.forEach((discussion) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${discussion.title}</h3>
    <p>Started by <strong>${discussion.user}</strong> · 💬 ${discussion.replies} replies</p>
  `;
  discussionList.appendChild(div);
});
















// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Discussion items hover effects
    const discussionItems = document.querySelectorAll('.discussion-item');
    
    discussionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        
        // Add click event for discussion items
        item.addEventListener('click', function() {
            // In a real application, this would navigate to the discussion thread
            console.log('Navigating to discussion thread:', this.querySelector('h3').textContent);
        });
    });
    
    // User items hover effects
    const userItems = document.querySelectorAll('.user-item');
    
    userItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.cursor = 'pointer';
            this.style.borderRadius = '8px';
            this.style.padding = '5px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
        });
        
        // Add click event for user profiles
        item.addEventListener('click', function() {
            // In a real application, this would navigate to the user profile
            const username = this.querySelector('h4').textContent;
            console.log('Viewing profile of:', username);
        });
    });
    
    // Activity items hover effects
    const activityItems = document.querySelectorAll('.activity-item');
    
    activityItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.cursor = 'pointer';
            this.style.borderRadius = '8px';
            this.style.padding = '5px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
        });
        
        // Add click event for activity items
        item.addEventListener('click', function() {
            // In a real application, this would navigate to the referenced content
            console.log('Viewing activity referenced content');
        });
    });
    
    // Simulate loading new activity (would be replaced with real data fetching in a production app)
    function simulateNewActivity() {
        setTimeout(() => {
            const activityList = document.querySelector('.activity-list');
            const firstActivity = activityList.querySelector('.activity-item');
            
            if (firstActivity) {
                // Create a clone of the first activity and update its time
                const newActivity = firstActivity.cloneNode(true);
                newActivity.querySelector('.time').textContent = 'Just now';
                
                // Apply a highlight effect to the new activity
                newActivity.style.backgroundColor = '#f0f7ff';
                
                // Add the new activity to the top of the list
                activityList.prepend(newActivity);
                
                // Remove highlight effect after 3 seconds
                setTimeout(() => {
                    newActivity.style.transition = 'background-color 1s ease';
                    newActivity.style.backgroundColor = 'transparent';
                }, 3000);
                
                // Remove the last activity to keep the list size consistent
                const activityItems = activityList.querySelectorAll('.activity-item');
                if (activityItems.length > 4) {
                    activityList.removeChild(activityItems[activityItems.length - 1]);
                }
            }
        }, 30000); // 30 seconds
    }
    
    // Call the function to simulate activity updates
    simulateNewActivity();
    
    // Function to create SVG comment icon (since we can't include actual image files)
    function createCommentIcons() {
        const commentCounts = document.querySelectorAll('.comment-count');
        
        commentCounts.forEach(container => {
            // Remove the img element
            const imgElement = container.querySelector('img');
            if (imgElement) {
                container.removeChild(imgElement);
            }
            
            // Create an SVG element
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "16");
            svg.setAttribute("height", "16");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("fill", "none");
            svg.setAttribute("stroke", "#888");
            svg.setAttribute("stroke-width", "2");
            svg.setAttribute("stroke-linecap", "round");
            svg.setAttribute("stroke-linejoin", "round");
            
            // Create the comment bubble path
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z");
            
            // Append the path to the SVG
            svg.appendChild(path);
            
            // Insert the SVG before the text in the container
            container.insertBefore(svg, container.firstChild);
        });
    }
    
    // Create comment icons on page load
    createCommentIcons();
});