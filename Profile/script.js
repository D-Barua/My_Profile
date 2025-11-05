// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // 1. Find the button on the page
  const copyButton = document.getElementById('copy-email-btn');
  
  // 2. Define the email address to copy
  const emailToCopy = 'diptanshubarua@gmail.com';

  // 3. Add a "click" event listener to the button
  copyButton.addEventListener('click', () => {
    
    // 4. Use the modern "Clipboard" API to copy the text
    navigator.clipboard.writeText(emailToCopy).then(() => {
      
      // --- Success! ---
      
      // 5. Give visual feedback
      const originalText = copyButton.innerText;
      copyButton.innerText = 'Copied to Clipboard!';
      copyButton.classList.add('copied'); // Add the green style
      
      // 6. Set a timer to reset the button back to normal
      setTimeout(() => {
        copyButton.innerText = originalText;
        copyButton.classList.remove('copied'); // Remove the green style
      }, 2000); // Reset after 2 seconds

    }).catch(err => {
      // --- Error ---
      // This might happen if the page isn't secure (not https)
      console.error('Failed to copy text: ', err);
      alert('Failed to copy email. Please copy it manually.');
    });
  });
});