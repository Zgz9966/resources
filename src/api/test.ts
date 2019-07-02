import axios from '@/util/api.request';

export const test = () => {
  return axios.request({
    url: 'user/login',
    data: {
      userName: '504',
      password: '1213'
    },
    method: 'post',
  });
};
