
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // let name = 'Mario'
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/Blogs");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
