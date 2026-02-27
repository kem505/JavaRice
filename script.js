// Profile Card Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for buttons
    const followBtn = document.querySelector('.btn-primary');
    const messageBtn = document.querySelector('.btn-secondary');
    
    followBtn.addEventListener('click', function() {
        if (this.textContent === 'Follow') {
            this.textContent = 'Following';
            this.style.background = '#4CAF50';
        } else {
            this.textContent = 'Follow';
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });
    
    messageBtn.addEventListener('click', function() {
        alert('Message feature coming soon!');
    });
    
    // Add hover effect to profile image
    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', function() {
        this.classList.toggle('spin');
    });
    
    // Add smooth counting animation to stats on load
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const finalValue = stat.textContent;
        animateValue(stat, 0, parseFloat(finalValue.replace('K', '')) * (finalValue.includes('K') ? 1000 : 1), 1000, finalValue.includes('K'));
    });
});

function animateValue(element, start, end, duration, hasK) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (hasK) {
            element.textContent = (value / 1000).toFixed(1) + 'K';
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add CSS for spin animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg) scale(1.05); }
        to { transform: rotate(360deg) scale(1.05); }
    }
    .profile-image.spin {
        animation: spin 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);
