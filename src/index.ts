import User from './models/User';

const user = new User({ name: 'test_name' });
user.fetch();
