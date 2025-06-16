import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  return fetchUtils.fetchJson(url, options);
};

const baseUrl = "http://localhost:3001";
const dataProvider = simpleRestProvider(baseUrl, httpClient);

export default {
  ...dataProvider,
  
  getList: (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      _sort: field,
      _order: order.toLowerCase(),
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };

    const url = `${baseUrl}/${resource}?${fetchUtils.queryParameters(query)}`;
    
    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has('x-total-count')) {
        console.warn('The X-Total-Count header is missing in the HTTP Response. The pagination may not work as expected.');
      }
      
      return {
        data: json,
        total: parseInt(headers.get('x-total-count') || json.length, 10),
      };
    });
  },
  
  getOne: (resource: string, params: any) => {
    return httpClient(`${baseUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    }));
  },
  
  update: (resource: string, params: any) => {
    return httpClient(`${baseUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};
