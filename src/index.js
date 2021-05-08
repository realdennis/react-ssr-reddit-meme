import React, { useState } from "react";
import getMemePosts from "../services/getMemePosts";
const App = ({ redditData }) => {
  const [showUpvotes, setShowUpvotes] = useState(false);
  return (
    <div id="app">
      <h1>Reddit /meme posts</h1>
      <button onClick={() => setShowUpvotes(!showUpvotes)}>
        {showUpvotes ? "Hide" : "Show"} upvotes
      </button>
      <table>
        <tr>
          <th>thumbnail</th>
          <th>title</th>
          <th>upvotes</th>
        </tr>
        {redditData &&
          redditData.data &&
          redditData.data.children &&
          redditData.data.children.map(({ data }) => {
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
      </table>
    </div>
  );
};
App.getInitialData = async () => {
  const redditData = await getMemePosts();

  return { redditData, message: "from getInitialData" };
};

export default App;
