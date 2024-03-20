import { RouteContext } from "gadget-server";

/**
 * Route handler for POST twilio
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({
  request: { body, query, params },
  reply,
  api,
  logger,
  connections,
}) {
  if (body.Body.toLowerCase().trim() === "yes") {
    const blogs = await api.blog.findMany({
      filter: {
        published: {
          isSet: false,
        },
      },
      select: {
        id: true,
      },
      first: 250,
    });

    if (blogs) {
      const blogsToUpdate = [];

      for (const blog of blogs) {
        blogsToUpdate.push({
          id: blog.id,
          published: new Date(),
        });
      }

      await api.blog.bulkUpdate(blogsToUpdate);
    }
  }
}
