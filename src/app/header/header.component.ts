import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('emitSelectedLink') emitSelectedLink = new EventEmitter<string>();

  setSelectedLink(selectedLink: string) {
    console.warn('selected link', selectedLink);
    this.emitSelectedLink.emit(selectedLink);
  }
}
