import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      history.push('/')
    });
  };
  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog Body : </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Author : </label>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>add blog</button>}
        {isPending && <button disabled>adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
