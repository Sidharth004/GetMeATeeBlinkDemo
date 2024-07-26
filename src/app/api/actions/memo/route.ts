
import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions"
export const GET =(req:Request)=>{

    const payload: ActionGetResponse = {
        icon: new URL("/demo.png",new URL(req.url).origin).toString(),
        label:"Send Crypto",
        description:"Super simple txn app",
        title:"TXn Demo"
    };

    return Response.json(payload,{
        headers: ACTIONS_CORS_HEADERS
    });
};

export const OPTIONS = GET;