import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly stats = [
    { label: 'Math core', value: 'Percent, Ratio, Work Rate, Algebra, Log, Trig' },
    { label: 'Physics core', value: 'Kinematics, Force, Energy, Momentum, Fluid, Electricity' },
    { label: 'Use case', value: 'Read fast, review daily, solve drills' }
  ];
}