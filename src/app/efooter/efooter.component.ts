import { Component } from '@angular/core';

@Component({
  selector: 'app-efooter',
  standalone: true,
  imports: [],
  templateUrl: './efooter.component.html',
  styleUrl: './efooter.component.css'
})
export class EfooterComponent {
  currentYear: number = new Date().getFullYear();

}
