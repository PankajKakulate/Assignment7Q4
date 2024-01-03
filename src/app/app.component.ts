import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public data : string = 'Marvellous Infosystem';

  public uppercase(){
   this.data = this.data.toUpperCase();
  }
  public lowercase(){
    this.data = this.data.toLowerCase();
  }
}
