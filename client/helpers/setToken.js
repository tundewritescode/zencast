import axios from 'axios';

export default (token) => {
  if (token) {
    axios.defaults.headers.common.token = token;
  }
};
