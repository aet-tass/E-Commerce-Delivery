// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import * as THREE from 'three';
import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';



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

export function settingsLogic() {
    // Active link handler for the current path
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        }
    });

    // Event listener for save button notifications
    document.querySelectorAll('.save-button').forEach(button => {
        button.addEventListener('click', function () {
            alert('Settings saved successfully!');
        });
    });

    // Toggle switch state persistence
    document.querySelectorAll('.toggle-switch input').forEach(toggle => {
        toggle.addEventListener('change', function () {
            const setting = this.closest('.setting-item').querySelector('.setting-name').textContent;
            console.log(`${setting} is now ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });
}

// Modal component
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

// Settings component with React hooks
const Settings = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Call the settings logic once on component mount
        settingsLogic();
    }, []);

    const handleDeleteButtonClick = () => {
        setModalOpen(true);
    };

    const handleConfirm = () => {
        setModalOpen(false);
        alert('Account deletion request submitted.');
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className="danger-button" onClick={handleDeleteButtonClick}>
                Delete Account
            </button>
            <ConfirmationModal
                isOpen={isModalOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure you want to delete your account? This action cannot be undone."
            />
        </div>
    );
};

export default Settings;


export function myOrdersLogic(){
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
      }
    });

    // Filter functionality
    document.querySelector('.filter-input').addEventListener('input', function(e) {
      // Add search filter logic here
    });

    document.querySelectorAll('.filter-select').forEach(select => {
      select.addEventListener('change', function(e) {
        // Add filter logic here
      });
    });

    // Pagination functionality
    document.querySelectorAll('.page-button').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelector('.page-button.active').classList.remove('active');
        this.classList.add('active');
        // Add pagination logic here
      });
    });
}