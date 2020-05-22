import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-test-f888b.firebaseio.com'
});

instance.defaults.headers.common['SOMENTHIG'] = 'something';

export default instance;
