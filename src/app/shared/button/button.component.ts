import { Component, Input } from '@angular/core';
import { ButtonColor } from 'src/app/core/models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('text') buttonText;
  @Input('color') color;
  @Input('fullWidth') isFullWidth = false;  

  public get buttonColor() {
    switch (this.color) {
      case ButtonColor.primary:
        return 'bg-accentCyan';
      case ButtonColor.secondary:
        return 'bg-accentBlue';
      case ButtonColor.danger:
        return 'bg-lightRed';
      default:
        return 'bg-green-500';
    }
  }
}
