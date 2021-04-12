import Model from '../models/Model';
import User, { UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap() : { [key: string] : () => void} {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('clicked');
  }

  template(): string {
    return `
      <div>
      </div>
    `;
  }
}
