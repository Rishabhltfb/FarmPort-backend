export default class ResponseBody {
    
    status: boolean;
    message: string;
    code: number;
    data: unknown;

    constructor(status: boolean, code: number, message: string, data: unknown) {
        this.status = status;
        this.data = data;
        this.code = code;
        this.message = message;
    }

    
}
