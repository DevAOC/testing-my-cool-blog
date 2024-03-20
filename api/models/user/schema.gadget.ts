import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://my-cool-blog.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "xZAv2DgiVlfb",
  fields: {
    blogs: {
      type: "hasMany",
      children: { model: "blog", belongsToField: "author" },
      storageKey: "JcqytVWGEuh_",
    },
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "6G3g91I2S8pn",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "EqokFIjFnEig",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "dCrQDKLjD2S2",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "uD3bVGAT8H-2",
    },
    firstName: { type: "string", storageKey: "exQb2coAlAOR" },
    googleImageUrl: { type: "url", storageKey: "3-vTkerZhWv1" },
    googleProfileId: { type: "string", storageKey: "n91UoVzWmJWU" },
    lastName: { type: "string", storageKey: "oxdRTlTrbk-h" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "NvDw5Hx_OcCx",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "7aWwl7EBOUNa",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "_r-_fsiObEJ2",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "s-ZvP3aOmo_g",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "k3QSyeQ64Gfb",
    },
  },
};
