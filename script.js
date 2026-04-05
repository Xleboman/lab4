// Active navigation state management
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// Function to update active nav link
function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveNav);

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
        navLinksContainer.classList.remove('active');
    }
});

// Voting functionality
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const post = this.closest('.post');
        const voteCount = post.querySelector('.vote-count');
        let count = parseInt(voteCount.textContent);
        
        if (this.classList.contains('upvote')) {
            count += 1;
        } else if (this.classList.contains('downvote')) {
            count -= 1;
        }
        
        voteCount.textContent = count;
        
        // Visual feedback
        this.style.color = this.classList.contains('upvote') ? '#ff4500' : '#7193ff';
        
        // Reset the opposite button color
        const oppositeButton = this.classList.contains('upvote') 
            ? post.querySelector('.downvote') 
            : post.querySelector('.upvote');
        oppositeButton.style.color = '#888';
    });
});

// Join community functionality
const joinButtons = document.querySelectorAll('.join-btn');
joinButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'Join') {
            this.textContent = 'Joined';
            this.style.background = '#333';
            this.style.color = '#fff';
        } else {
            this.textContent = 'Join';
            this.style.background = '#ffffff';
            this.style.color = '#000';
        }
    });
});

// Create post button functionality
const createPostBtn = document.querySelector('.create-post-btn');
createPostBtn.addEventListener('click', function() {
    alert('Create post functionality would open a post creation modal here!');
});

// Initialize active nav on page load
document.addEventListener('DOMContentLoaded', updateActiveNav);