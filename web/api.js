import { Client } from "@gadget-client/my-cool-blog";

export const api = new Client({ environment: window.gadgetConfig.environment });
