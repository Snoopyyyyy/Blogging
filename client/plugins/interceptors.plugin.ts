import { Plugin } from '@nuxt/types';

const interceptor: Plugin = ({ $axios }) =>  {
    $axios.onResponseError(error => {
        throw new Error(error?.response?.data?.message || 'Internal servor error')
    });
}

export default interceptor;