import axios from 'axios';

export default {
    axios(url) {

    headers.Authorization = `Bearer Token from vuex`;

      return {
        post: data => axios.post(url, data, { headers })
        .then((response) => {
          return response.data;
        }),

        get: () => axios.get(url, { headers })
        .then((response) => {
          endLoading();
          return response.data;
        }),
  
        put: data => axios.put(url, data, { headers })
        .then((response) => {
          return response.data;
        }),
  
        patch: data => axios.patch(url, data, { headers })
        .then((response) => {
          return response.data;
        }),
  
        delete: data => axios.request({ url, method: 'delete', data, headers })
        .then((response) => {
          endLoading();
          return response.data;
        }),
      };
    },
  };