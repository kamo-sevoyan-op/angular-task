import { Component } from '@angular/core';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NotFoundComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
})
export class NotFoundPageComponent {}
