// script.js

import { supabase } from './supabase.js';

export async function loadHeader() {
  const res = await fetch('header.html');
  const html = await res.text();
  document.getElementById('header-placeholder').innerHTML = html;

  // Selepas header dimuat, ubah link berdasarkan sesi
  const { data: { session } } = await supabase.auth.getSession();
  const authLink = document.getElementById('auth-link');

  if (session) {
    authLink.textContent = 'Logout';
    authLink.href = '#';
    authLink.addEventListener('click', async (e) => {
      e.preventDefault();
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert('Gagal logout: ' + error.message);
      } else {
        window.location.href = 'welcome.html';
      }
    });
  } else {
    authLink.textContent = 'Log Masuk';
    authLink.href = 'login.html';
  }
}
