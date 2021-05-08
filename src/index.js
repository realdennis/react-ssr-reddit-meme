import React, { useState, useEffect } from "react";
import getMemePosts from "../services/getMemePosts";
const App = ({ redditData }) => {
  const [showUpvotes, setShowUpvotes] = useState(false);
  const [data, setData] = useState(redditData);
  const getPostsAndSetData = async (type) => {
    const _data = await getMemePosts(type);
    setData(_data);
  };

  useEffect(() => {
    if (data === undefined) {
      getPostsAndSetData("top");
    }
  }, []);
  return (
    <div id="app">
      <h1>Reddit /meme posts</h1>
      <button onClick={() => setShowUpvotes(!showUpvotes)}>
        {showUpvotes ? "Hide" : "Show"} upvotes
      </button>
      <button onClick={() => getPostsAndSetData("top")}>Get top</button>
      <button onClick={() => getPostsAndSetData("controversial")}>
        Get controversial
      </button>

      <button onClick={() => getPostsAndSetData("rising")}>Get rising</button>
      <table>
        <thead>
          <tr>
            <th>thumbnail</th>
            <th>title</th>
            <th>upvotes</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data &&
            data.data.children &&
            data.data.children.map(({ data }) => {
              return (
                <tr key={data.thumbnail}>
                  <td>
                    <img src={data.thumbnail}></img>
                  </td>
                  <td>{data.title}</td>
                  <td>{showUpvotes ? data.ups : "???"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
App.getInitialData = async () => {
  const redditData = await getMemePosts();

  return { redditData, message: "from getInitialData" };
};

export default App;
