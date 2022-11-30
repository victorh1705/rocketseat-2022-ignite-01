import React from 'react';
import Avatar from './Avatar';

interface PostProps {

}

export default function Post(props: PostProps) {
  return (
    <article className="p-10 bg-neutral-800 rounded-xl [&+article]:mt-8">

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder src="https://github.com/victorh1705.png"/>
          <div>
            <strong className="block text-white text-base">Victor Henrique</strong>
            <span className="block text-neutral-600 text-sm">Dev iOS</span>
          </div>
        </div>
        <time className="text-neutral-600 text-sm">Publicado há 1 hora</time>
      </header>

      <div className="my-6">
        <p className="text-neutral-400 [&+p]:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          enim dui,
          venenatis quis malesuada et,
          posuere vel felis. Nullam dignissim accumsan neque, eu luctus ligula. Sed quis ligula aliquam,
          condimentum velit eget, sagittis orci. Integer volutpat libero ut nisi ullamcorper, eget feugiat velit
          molestie. Integer tempus rhoncus ipsum, dapibus sagittis urna tincidunt aliquam. Curabitur ac ipsum sit
        </p>

        <p className="text-neutral-400">
          Ut libero orci, hendrerit ut elit ut, ultricies fermentum nulla. Praesent nec pretium dui. Integer
          eleifend, ante ut luctus porta, lacus urna convallis quam, sit amet lacinia enim urna eget ante.
          Praesent
        </p>
      </div>

      <form className="pt-4 border-t border-neutral-400" action="">
        <strong className="text-neutral-200">
          Deixe seu feedback
        </strong>

        <textarea
          className="w-full h-24 mt-4 border-0 bg-neutral-900 focus:border-2 focus:border-emerald-600 rounded-lg resize-none placeholder:p-4 placeholder:text-neutral-500"
          placeholder='Escreve um comentário...'
        />

        <button className="text-white bg-emerald-600 py-4 px-6 mt-4 rounded hover:bg-emerald-500 duration-100">
          Publicar
        </button>
      </form>

      <div>
        <Avatar src="https://github.com/victorh1705.png"/>
      </div>

    </article>
  );
}
