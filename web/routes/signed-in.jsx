import { useState, useCallback } from "react";
import { useUser, useAction } from "@gadgetinc/react";
import { api } from "../api";

export default function () {
  const user = useUser(api);

  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const [{ data: submitResponse, error: errorSubmitting, fetching: fetchingSubmissionResponse }, submit] = useAction(api.blog.create)

  const handleTitleChange = useCallback(({ target: { value } }) => {
    console.log(value)
    setTitle(value)
  }, [setTitle])

  const handleBodyChange = useCallback(({ target: { value } }) => {
    console.log(value)
    setBody(value)
  }, [setBody])

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    await submit({ body, title, author: { _link: user.id } })

    setBody("")
    setTitle("")
  }, [submit, body, title, user])

  if (errorSubmitting) {
    console.log(errorSubmitting)
  }

  return user ? (
    <>
      <h3>
        New blog
      </h3>
      <form>
        <div>
          <label>Title</label>
          <br />
          <input type="text" id="titleInput" placeholder="My cool blog title" value={title} onChange={handleTitleChange}></input>
        </div>
        <div>
          <label>Body</label>
          <br />
          <textarea id="bodyTextarea" placeholder="My cool blog body" value={body} onChange={handleBodyChange} />
        </div>
        <button onClick={handleSubmit}>Create</button>
      </form>
    </>
  ) : null;
}
