import ResponseBody from "../models/dto/generic/response-body";

export default class ResponseAdapter {
    sendSuccessResponse(message: string, data: unknown): ResponseBody {
        return new ResponseBody(true, 200, message, data);
    }

    sendErrorResponse(message: string, code?: number): ResponseBody {
        return new ResponseBody(false, code ?? 500, message, null);
    }
}
