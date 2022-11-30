import React, {useState} from 'react';
import Avatar from './Avatar';
import {ThumbsUp, Trash} from 'phosphor-react';

interface CommentProps {

}

export default function Comment(props: CommentProps) {

  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);

  return (
    <div className="flex mt-6">
      <Avatar src="https://github.com/victorh1705.png"/>

      <div className="flex-1 ml-4">
        <div className='flex flex-col p-8 bg-neutral-700 rounded-lg'>
          <header className="flex items-start justify-between">
            <div>
              <strong className="block text-neutral-100 text-sm">Victor Henrique</strong>
              <time className="block text-neutral-500 text-xs">Cerca de 2h</time>
            </div>
            <Trash
              weight={'regular'}
              className="text-neutral-400"
              size={20}
            />
          </header>

          <p className='mt-8 text-neutral-300 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim dui, venenatis quis malesuada et, posuere vel felis. Nullam dignissim accumsan neque, eu luctus ligula. Sed quis ligula aliquam, condimentum velit eget, sagittis orci.
          </p>
        </div>

        <footer className="mt-4">
          <button className="flex items-center text-neutral-400 leading-[0]">
            <ThumbsUp
              className="mr-4"
              size={20}
              weight={isLiked ? 'fill' : 'regular'}
            />
            {isLiked ? 'Curtiu' : 'Curtir'}
            <span className="px-1 before:mr-1 before:content-['\2022']">{likeCounter}</span>
          </button>
        </footer>
      </div>

    </div>
  );
}
