import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from './landing-page/contact-us/contact-us.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactUsComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
}
