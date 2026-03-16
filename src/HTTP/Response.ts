import get from 'lodash/get'
import { AxiosResponse } from 'axios';

class Response<T = any> {
    response?: AxiosResponse<T>;

    constructor(response?: AxiosResponse<T>) {
        this.response = response;
    }

    getData(): T | null {
        return get(this.response, 'data', null);
    }

    getStatus(): number {
        return get(this.response!, 'status');
    }

    getHeaders(): any {
        return get(this.response, 'headers', {});
    }

    getValidationErrors(): Record<string, any> | null {
        return get(this.response, 'data', null) as Record<string, any> | null;
    }
}

export default Response;
