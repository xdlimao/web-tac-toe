import { Component } from '@angular/core';
import { CreateroombuttonComponent } from '../../components/createroombutton/createroombutton.component';
import { JoinroombuttonComponent } from '../../components/joinroombutton/joinroombutton.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CreateroombuttonComponent,
    JoinroombuttonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
