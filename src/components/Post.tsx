import React, {FormEvent, useState} from 'react';
import Avatar from './Avatar';
import Comment, {CommentProps} from './Comment';

interface ContentProps {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostProps {
  id: number;
  profileImg: string;
  profile: string;
  role: string;
  time: string;
  content: ContentProps[];
  comments: CommentProps[];
}

export default function Post({comments, content, profile, profileImg, role, time}: PostProps) {

  const [commentsArray, setCommentsArray] = useState(comments);
  const [newComment, setNewComment] = useState('');

  function handleOnTextSubmit(event: FormEvent) {
    event.preventDefault()

    let first = Object.assign({}, commentsArray.at(0))
    if (first) {
      first.content = newComment
      first.id = Math.random() % 1000
      setCommentsArray(prevState => [...prevState, first as CommentProps]);
    }

    setNewComment('')
  }

  function handleOnDelete(id: number) {
    setCommentsArray(state => state.filter(item => item.id !== id))
  }

  return (
    <article className="p-10 bg-neutral-800 rounded-xl [&+article]:mt-8">

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src={profileImg}/>
          <div>
            <strong className="block text-white text-base">{profile}</strong>
            <span className="block text-neutral-400 text-sm">{role}</span>
          </div>
        </div>
        <time className="text-neutral-400 text-sm">{time}</time>
      </header>

      <div className="my-6">
        {content.map(({type, content}) => {
          switch (type) {
            case 'link':
              return <a className="text-emerald-600 [&+p]:pt-4">{content}</a>
            case 'paragraph':
              return <p className="text-neutral-400 [&+p]:pt-4">{content}</p>
          }
        })
        }
      </div>

      <form className="pt-4 border-t border-neutral-700" onSubmit={event => handleOnTextSubmit(event)}>
        <strong className="text-emerald-600 text-sm">
          Deixe seu feedback
        </strong>

        <textarea
          className="w-full h-24 mt-4 p-4 border-0 bg-neutral-900
           text-neutral-400 text-sm
           focus:border-2 focus:border-emerald-600
           rounded-lg resize-none
           placeholder:text-neutral-500"
          placeholder="Escreve um comentário..."
          value={newComment}
          onChange={event => setNewComment(event.target.value)}
        />

        <button
          className="text-white text-base bg-emerald-600 py-4 px-6 mt-4 rounded hover:bg-emerald-500 duration-100"
        >
          Publicar
        </button>
      </form>

      <div className="mt-8">
        {commentsArray.map(
          ({id, content, isLiked, likeCount, profile, profileImg, time}) =>
            <Comment
              key={id}
              id={id}
              profileImg={profileImg}
              profile={profile}
              time={time}
              content={content}
              isLiked={isLiked}
              likeCount={likeCount}
              onDelete={() => handleOnDelete(id)}
            />,
        )}
      </div>

    </article>
  );
}
