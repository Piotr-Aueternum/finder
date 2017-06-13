import * as api from './constants/api';
import Api from './api_client';

const url = api.url;
export default function fetchData() {
  return Api.init({
    url,
    pathname: api.fetchData,
  });
}
