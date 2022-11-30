import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post, {PostProps} from './components/Post';
import {CommentProps} from './components/Comment';


const comments1 = [
  {
    id: 1,
    profileImg: 'http://placeimg.com/40/40/people',
    profile: 'Victor Henrique',
    time: 'Publicado há 1 hora',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim dui, venenatis quis malesuada et, posuere vel felis. Nullam dignissim accumsan neque, eu luctus ligula.',
    isLiked: true,
    likeCount: 15,
  },
  {
    id: 2,
    profileImg: 'http://placeimg.com/40/40/any',
    profile: 'Victor Henrique',
    time: 'Publicado há 2 hora',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim dui, venenatis quis malesuada et, posuere vel felis. Nullam dignissim accumsan neque, eu luctus ligula.',
    isLiked: false,
    likeCount: 1,
  },
] as CommentProps[]

const posts1 = [
  {
    id: 1,
    profileImg: 'https://github.com/victorh1705.png',
    profile: 'Victor Henrique',
    role: 'Dev iOS',
    time: 'Publicado há 1 hora',
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim dui, venenatis quis malesuada et, posuere vel felis. Nullam dignissim accumsan neque, eu luctus ligula.',
      },
    ],
    comments: comments1,
  },
] as PostProps[]

function App() {

  const [posts, setPosts] = useState(posts1);

  return (
    <div className="min-h-full">
      <Header/>
      <div className="max-w-7xl grid mx-auto py-8 px-4 md:grid-cols-[256px_1fr] grid-cols-[1fr] gap-8 items-start">
        <Sidebar
          bgImage="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          profileImg="https://github.com/victorh1705.png"
          profile="Victor Henrique"
          role="Desenvolvedor iOS"
        />
        <main>
          {
            posts.map(({comments, content, id, profile, profileImg, role, time}) =>
              <Post
                id={id}
                profileImg={profileImg}
                profile={profile}
                role={role}
                time={time}
                content={content}
                comments={comments}
              />)
          }
        </main>
      </div>
    </div>
  )
}

export default App
