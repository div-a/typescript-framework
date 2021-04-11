import Attributes from './attributes';
import Eventing from './Eventing';
import Sync from './Sync';

interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export default class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
