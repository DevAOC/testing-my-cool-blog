import {
  applyParams,
  save,
  ActionOptions,
  CreateBlogActionContext,
} from "gadget-server";

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * @param { CreateBlogActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
}

/**
 * @param { CreateBlogActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "", // INSERT NUMBER HERE
      body: `Your newly created blog, ${record.title}, is ready to publish!\n\nWould you like to publish the blog at this time? (Yes/No)`,
    })
    .then((response) => {
      logger.info({ response }, "RESPONSE");
    })
    .catch((error) => {
      logger.error(error.message);
    });
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
