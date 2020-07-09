import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fX_EgWxczpiWHzkhY6uigZ5xxwIb28PcvAKLMRb0xD0',
  },
});
