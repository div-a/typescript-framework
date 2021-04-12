import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';

interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T
    get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
    fetch(id: number): AxiosPromise ;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export default class Model<T extends HasId> {
  constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>,
  ) {}

  // this method passthrough without getter / setter only works with above constructor version.
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Can\'t fetch without id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        console.log('Received response ', response);
        this.trigger('save');
      });
  }
}
