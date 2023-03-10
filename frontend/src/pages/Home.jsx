import { useContext, useEffect, useState } from "react";
import PostList from "../components/PostList";
import axios from "axios";
import { routes, url } from "../routes/routes";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(routes.api.posts.index, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    axios
      .delete(url(routes.api.posts.delete, { id }))
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {posts.length === 0 ? (
        <>You don't have any post</>
      ) : (
        <PostList posts={posts} onDelete={handleDelete} />
      )}
    </>
  );
}

export default Home;
