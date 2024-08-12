import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
    matcher: ["/middleware", "/api/data"], // protected file hrefs go here
};