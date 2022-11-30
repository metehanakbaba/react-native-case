import axios from 'axios';

/**
 * Thus, more than one API server can be built in different configurations.
 */
export default axios.create({
  baseURL:
    process.env.REACT_APP_API_ENDPOINT ??
    'https://my-json-server.typicode.com/benirvingplt',
  responseType: 'json',
  withCredentials: true,
});
