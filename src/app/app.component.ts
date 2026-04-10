import { Component } from '@angular/core';
import { SegundaTablaComponent } from './features/segunda-tabla/segunda-tabla.component';
import { PrimerTablaComponent } from './features/primer-tabla/primer-tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SegundaTablaComponent, PrimerTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
