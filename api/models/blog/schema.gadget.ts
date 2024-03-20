import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "blog" model, go to https://my-cool-blog.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "PvstOwIe-k6N",
  fields: {
    author: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "R-e2uLZF4bNH",
    },
    authorName: {
      type: "computed",
      sourceFile: "api/models/blog/authorName.gelly",
      storageKey: "ALNpxwwVZxnq",
    },
    body: { type: "string", storageKey: "iovUPEBMnKc-" },
    published: {
      type: "dateTime",
      includeTime: true,
      storageKey: "8aYT5QWR8xnH",
    },
    title: { type: "string", storageKey: "TmLus7RW2U0I" },
  },
};
