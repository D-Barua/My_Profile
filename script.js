document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copy-email-btn');
  const emailToCopy = 'diptanshubarua@gmail.com';
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      const originalText = copyButton.innerText;
      copyButton.innerText = 'Copied to Clipboard!';
      copyButton.classList.add('copied'); 
      
      setTimeout(() => {
        copyButton.innerText = originalText;
        copyButton.classList.remove('copied'); 
      }, 2000); 
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy email. Please copy it manually.');
    });
  });

});
