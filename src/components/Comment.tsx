import React, {useState} from 'react';
import Avatar from './Avatar';
import {ThumbsUp, Trash} from 'phosphor-react';

interface CommentProps {
  id: number,
  profileImg: string,
  profile: string,
  time: string,
  content: string,
  isLiked: boolean,
  likeCount: number,
  onDelete: (id: number) => void,
}

export default function Comment({id, isLiked, likeCount, content, profile, profileImg, time, onDelete}: CommentProps) {

  const [isUserLiked, setIsUserLiked] = useState(isLiked);
  const [likeCounter, setLikeCounter] = useState(likeCount);

  function handleOnClickLikeButton() {
    setLikeCounter(state => isUserLiked ? state - 1 : state + 1)
    setIsUserLiked(() => !isUserLiked)
  }

  function handleOnDelete() {
    onDelete(id)
  }

  return (
    <div className="flex mt-6">
      <Avatar src={profileImg}/>

      <div className="flex-1 ml-4">
        <div className="flex flex-col p-8 bg-neutral-700 rounded-lg">
          <header className="flex items-start justify-between">
            <div>
              <strong className="block text-neutral-100 text-sm">{profile}</strong>
              <time className="block text-neutral-300 text-xs">{time}</time>
            </div>

            <button onClick={handleOnDelete}>
              <Trash
                weight={'regular'}
                className="text-neutral-400"
                size={24}
              />
            </button>
          </header>

          <p className='mt-8 text-neutral-300 text-sm'>
            {content}
          </p>
        </div>

        <footer className="mt-4">
          <button
            className={`flex items-center leading-[0] hover:text-emerald-400 duration-100 ${isUserLiked ? 'text-emerald-600' : 'text-neutral-400'}`}
            onClick={handleOnClickLikeButton}
          >
            <ThumbsUp
              className="mr-2"
              size={20}
              weight={isUserLiked ? 'fill' : 'regular'}
            />
            {isUserLiked ? 'Curtiu' : 'Curtir'}
            <span className="px-1 before:mr-1 before:content-['\2022']">{likeCounter}</span>
          </button>
        </footer>
      </div>

    </div>
  );
}
