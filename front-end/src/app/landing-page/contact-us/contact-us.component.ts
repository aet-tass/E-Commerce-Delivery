import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  newsletterEmail = '';

  submitContactForm() {
    // Handle contact form submission logic here, like sending data to an API
    console.log('Contact Form Data:', this.contactForm);
  }

  subscribeNewsletter() {
    // Handle newsletter subscription logic here
    console.log('Newsletter Email:', this.newsletterEmail);
  }
}
