import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three';
import React from 'react';
import Chart from 'react-apexcharts';


export function Logic() {
    // Tab switching functionality
    const btn = document.querySelectorAll('.auth-tab');
    if (btn) {
        btn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                document.querySelector('.auth-tab.active').classList.remove('active');
                e.target.classList.add('active');
                document.querySelector('.auth-form.active').classList.remove('active');
                document.getElementById(`${tab}Form`).classList.add('active');
            });
        });
    }
}



export function dashboardLogic(){
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
      }
    });
}


export function pLogic(){
        // Active link handler
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
          }
        });
    
        // Edit button functionality
        document.querySelectorAll('.edit-button').forEach(button => {
          button.addEventListener('click', function() {
            const section = this.closest('.profile-section');
            const inputs = section.querySelectorAll('.form-input');
            inputs.forEach(input => {
              input.readOnly = !input.readOnly;
              input.focus();
            });
          });
        });
    
        // Save button functionality
        document.querySelector('.save-button').addEventListener('click', function(e) {
          e.preventDefault();
          // Add save logic here
          alert('Changes saved successfully!');
        });
}

export function settingsLogic(){
    // Active link handler
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
      }
    });

    // Save notification
    document.querySelectorAll('.save-button').forEach(button => {
      button.addEventListener('click', function() {
        alert('Settings saved successfully!');
      });
    });

    // Delete account confirmation
    document.querySelector('.danger-button').addEventListener('click', function() {
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        alert('Account deletion request submitted.');
      }
    });

    // Toggle switch state persistence
    document.querySelectorAll('.toggle-switch input').forEach(toggle => {
      toggle.addEventListener('change', function() {
        const setting = this.closest('.setting-item').querySelector('.setting-name').textContent;
        console.log(`${setting} is now ${this.checked ? 'enabled' : 'disabled'}`);
      });
    });
}