function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(pageId).style.display = 'block';
}

// Server status simulation
function checkServerStatus() {
    // Simulated server status check
    setTimeout(() => {
        document.getElementById('server-status').innerText = 'Server Status: Online';
    }, 1000);
}

// Check server status on page load
window.onload = function() {
    checkServerStatus();
};
