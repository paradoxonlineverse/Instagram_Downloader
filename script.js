// Show toast notification
function showToast(message, type = 'error') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

let countdownInterval;

function startDownload() {
    const urlInput = document.getElementById('urlInput');
    const errorMessage = document.getElementById('errorMessage');
    const countdownElement = document.getElementById('countdown');
    const url = urlInput.value.trim();

    // Reset error and countdown
    errorMessage.style.display = 'none';
    countdownElement.style.display = 'none';

    // Validate URL
    if (!url) {
        showError('Please enter a URL');
        return;
    }

    if (!isValidUrl(url)) {
        showError('Please enter a valid Instagram or YouTube URL');
        return;
    }

    // Open affiliate link in a new tab
    window.open("https://www.profitableratecpm.com/j4xzffnk?key=f520d1a950d115c2238dd7e930ef0dc5", "_blank");

    // Show countdown
    countdownElement.style.display = 'block';
    let secondsLeft = 5;
    
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = `Downloading in ${secondsLeft} seconds...`;
        secondsLeft--;

        if (secondsLeft < 0) {
            clearInterval(countdownInterval);
            redirectToDownload(url);
        }
    }, 1000);
}

function isValidUrl(url) {
    // Check if it's an Instagram URL
    if (url.includes('instagram.com') || url.includes('instagr.am')) {
        return true;
    }
    
    // Check if it's a YouTube URL
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return true;
    }

    return false;
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function redirectToDownload(url) {
    // Always redirect to fastdl.app/en
    window.location.href = `https://fastdl.app/en?url=${encodeURIComponent(url)}`;
}

// Add event listener for Enter key
document.getElementById('urlInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        startDownload();
    }
});

// Add event listener for paste
document.getElementById('urlInput').addEventListener('paste', function(event) {
    // Small delay to ensure the paste is completed
    setTimeout(() => {
        if (this.value.trim()) {
            startDownload();
        }
    }, 100);
}); 