// notification.js

export function showNotification(message, type = 'success') {
    const box = document.getElementById('notification');
    box.textContent = message;
    box.className = ''; // reset semua class
    box.classList.add('success');
  
    if (type === 'error') box.classList.replace('success', 'error');
  
    box.style.display = 'block';
  
    setTimeout(() => {
      box.style.display = 'none';
    }, 3000);
  }
  