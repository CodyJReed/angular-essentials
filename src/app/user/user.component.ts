import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

export interface User {
id: string
avatar: string
name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
