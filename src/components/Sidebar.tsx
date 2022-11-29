import { PencilLine } from 'phosphor-react'
import React from 'react'

interface Props {
    bgImage: string,
    profileImg: string,
    profile: string
    role: string
}

export default function Sidebar({ bgImage, profileImg, profile, role }: Props) {
    return (
        <aside className="bg-neutral-800 rounded-lg overflow-hidden">
            <img className='w-full h-16 object-cover' src={bgImage} />

            <div className='-mt-6 flex flex-col items-center'>
                <img className='h-12 w-12 bg-neutral-800 rounded-md box-content p-1 border-2 border-emerald-600 outline-2' src={profileImg} />
                <strong className="text-white mt-4 leading-relaxed">{profile}</strong>
                <span className="text-neutral-600 leading-relaxed text-sm">{role}</span>
            </div>

            <footer className='mt-5 pt-6 pb-8 border-t border-neutral-600'>
                <a href='#' className="flex py-4 px-4 mx-8 items-center gap-3 border-2 border-emerald-600 rounded-md text-emerald-600 hover:border-emerald-500 hover:text-emerald-500 duration-100 text-sm">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}