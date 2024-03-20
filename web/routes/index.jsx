import { useMaybeFindFirst } from "@gadgetinc/react";
import { api } from "../api";

export default function () {
  const [{ data: blog, error: errorFetchingBlog, fetching: fetchingBlog }] =
    useMaybeFindFirst(api.blog, {
      filter: {
        published: {
          isSet: true,
        },
      },
      select: {
        title: true,
        body: true,
        published: true,
        authorName: true,
      },
    });

  if (fetchingBlog) {
    return <>Loading...</>;
  }

  if (errorFetchingBlog) {
    return <>{errorFetchingBlog.message}</>;
  }

  return (
    <>
      {blog ? (
        <div className="blog">
          <div className="blogHeading">
            <div className="blogHeadingTop">
              <h3>{blog.title}</h3>
              <span>{blog.published.toDateString()}</span>
            </div>
            <div className="blogHeadingBottom">by {blog.authorName}</div>
          </div>
          <p>{blog.body}</p>
        </div>
      ) : (
        <>No blog published</>
      )}
    </>
  );
}
