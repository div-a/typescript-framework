import axios, { AxiosPromise } from 'axios';

interface HasId {
    id?: string;
}

export default class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): void {
    const { id } = data;
    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}

// .then(
//     (response: AxiosResponse) => {
//       this.set(response.data);
//     },
//   );
