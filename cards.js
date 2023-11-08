// Function to adjust the height of the content div
function adjustContentHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const windowHeight = window.innerHeight;
    
    const content = document.getElementById('content');
    const newHeight = windowHeight - (headerHeight + footerHeight);
    console.log(headerHeight)
    content.style.height = newHeight + 'px';
    content.style.width = (newHeight * 0.75) + 'px';
}

// Call the function on page load and window resize
window.addEventListener('load', adjustContentHeight);
window.addEventListener('resize', adjustContentHeight);
