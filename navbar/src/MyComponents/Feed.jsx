import React, { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  FaThumbsUp,
  FaRetweet,
  FaComment,
  FaFileAlt,
  FaCamera,
} from "react-icons/fa";

const Feed = () => {
  const initialPosts = [
    {
      id: 1,
      name: "John Snow",
      time: "5 min ago",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      name: "Arya Stark",
      time: "10 min ago",
      text: "Winter is coming.",
    },
    {
      id: 3,
      name: "Tyrion Lannister",
      time: "15 min ago",
      text: "I drink and I know things.",
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePosts = () => {
    setTimeout(() => {
      const newPosts = [
        {
          id: posts.length + 1,
          name: "Sansa Stark",
          time: "20 min ago",
          text: "Queen in the North!",
        },
        {
          id: posts.length + 2,
          name: "Bran Stark",
          time: "30 min ago",
          text: "I am the Three-Eyed Raven.",
        },
      ];

      if (posts.length >= 20) {
        setHasMore(false); // Stop loading after 20 posts
      }

      setPosts([...posts, ...newPosts]);
    }, 100);
  };

  return (
    <div id="feed-container" className="feed-container">
      {/* Post Options */}
      <div className="post-creation d-grid ">
        <div className="user-avatar">
          {/* Placeholder for user avatar */}
          <img src="/pic3.png" alt="User Avatar" />
          <input
            type="text"
            className="post-input"
            placeholder="Start a post"
          />
        </div>
        <hr width={580} />
        <div className="post-actions">
          <button className="action-button video-button">
            <span className="icon">🎥</span> <b>Go Live</b>
          </button>
          <button className="action-button photo-button">
            <span className="icon">📷</span> <b>Post</b>
          </button>
          <button className="action-button article-button">
            <span className="icon">
              <FaFileAlt />
            </span>{" "}
            <b>Write Article</b>
          </button>
        </div>
      </div>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: "center" }}>No more posts</p>}
        scrollableTarget="feed-container"
      >
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <div className="post-profile">
                <img
                  className="post-profile"
                  src="/anime_wallpaper.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4>{post.name}</h4>
                <p>{post.time}</p>
              </div>
            </div>
            <p className="post-text">{post.text}</p>
            <div className="post-image">
              <img className="post-image" src="Posty.jpg" alt="" />
            </div>
            <div className="post-footer">
              <FaThumbsUp
                className="post-icon mirrored"
                style={{ marginTop: "10px" }}
              />{" "}
              <span className="post-text">Like</span>
              <FaRetweet
                className="post-icon"
                style={{ marginTop: "12px", marginLeft: "2px" }}
              />{" "}
              <span className="post-text">Repost</span>
              <IoShareSocial
                className="post-icon"
                style={{ marginTop: "12px", marginLeft: "2px" }}
              />{" "}
              <span className="post-text">Share</span>
              <FaComment
                className="post-icon"
                style={{
                  marginTop: "12px",
                  marginLeft: "2px",
                  position: "relative",
                  left: "7px",
                }}
              />
              <div className="search-container">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Write a comment..."
                />
                <FaCamera
                  style={{
                    fontSize: "22px",
                    position: "relative",
                    right: "30px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
