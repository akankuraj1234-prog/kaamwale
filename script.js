// Clean Front Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }
});

// Job Posting Function
function postJob() {
    const service = document.getElementById('job-service').value;
    const location = document.getElementById('job-location').value;
    const description = document.getElementById('job-description').value;
    const budget = document.getElementById('job-budget').value;
    const urgency = document.getElementById('job-urgency').value;
    
    if (!service || !location || !description) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show loading state
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting Job...';
    btn.disabled = true;
    
    // Simulate job posting
    setTimeout(() => {
        alert('Job posted successfully! Workers will contact you soon.');
        
        // Reset form
        document.getElementById('job-service').value = '';
        document.getElementById('job-location').value = '';
        document.getElementById('job-description').value = '';
        document.getElementById('job-budget').value = '';
        document.getElementById('job-urgency').value = '';
        
        // Reset button
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Redirect to post-job page for full experience
        window.location.href = 'post-job.html';
    }, 2000);
}

// Search Workers Function
function searchWorkers() {
    const service = document.getElementById('worker-service').value;
    const location = document.getElementById('worker-location').value;
    
    if (!location) {
        alert('Please enter your location to search workers');
        return;
    }
    
    // Show loading state
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    btn.disabled = true;
    
    setTimeout(() => {
        // Store search parameters
        localStorage.setItem('workerSearch', JSON.stringify({
            service: service,
            location: location
        }));
        
        // Redirect to worker page
        window.location.href = 'worker.html';
    }, 1500);
}

// View Worker Profile
function viewProfile(workerId) {
    localStorage.setItem('selectedWorker', workerId);
    window.location.href = 'worker.html';
}

// Contact Worker
function contactWorker(workerId) {
    alert(`Contacting ${workerId}... This will open chat or call options.`);
    // In real app, this would open contact modal or redirect to chat
}
