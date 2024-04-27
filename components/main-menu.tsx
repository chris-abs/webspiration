'use client'
import { useNavMenuStore } from '@/app/store/navMenuStore'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

export default function MainMenu() {
  const { isOpen, toggle } = useNavMenuStore()

  return (
    <>
      <div className='m-0 h-screen w-screen overflow-hidden'>
        <div
          className={`z-2 relative m-0 h-screen w-screen bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center ${
            isOpen
              ? 'transition duration-300'
              : 'translate-y-[-35%] transition duration-300 ease-in-out'
          }`}
        />

        <nav className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <div
            className={`${
              isOpen
                ? ''
                : ' -translate-y-[130%] transition duration-500 ease-in-out'
            }`}>
            <div className='flex gap-3'>
              <a className='m-0 w-full text-xl uppercase text-muted-foreground no-underline'>
                <h2>Title 1</h2>
                <div className='mt-3 aspect-[1.8/1] h-[320px] w-full rounded-md bg-red-400 bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center object-cover'></div>
              </a>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? ''
                : ' -translate-y-[130%] transition duration-500 ease-in-out'
            }`}>
            <div className='flex gap-3'>
              <a className='m-0 w-full text-xl uppercase text-muted-foreground no-underline'>
                <h2>Title 1</h2>
                <div className='mt-3 aspect-[1.8/1] h-[320px] w-full rounded-md bg-red-400 bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center object-cover'></div>
              </a>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? ''
                : ' -translate-y-[130%] transition duration-500 ease-in-out'
            }`}>
            <div className='flex gap-3'>
              <a className='m-0 w-full text-xl uppercase text-muted-foreground no-underline'>
                <h2>Title 1</h2>
                <div className='mt-3 aspect-[1.8/1] h-[320px] w-full rounded-md bg-red-400 bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center object-cover'></div>
              </a>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? ''
                : ' -translate-y-[130%] transition duration-500 ease-in-out'
            }`}>
            <div className='flex gap-3'>
              <a className='m-0 w-full text-xl uppercase text-muted-foreground no-underline'>
                <h2>Title 1</h2>
                <div className='mt-3 aspect-[1.8/1] h-[320px] w-full rounded-md bg-red-400 bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center object-cover'></div>
              </a>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? ''
                : ' -translate-y-[130%] transition duration-500 ease-in-out'
            }`}>
            <div className='flex gap-3'>
              <a className='m-0 w-full text-xl uppercase text-muted-foreground no-underline'>
                <h2>Title 1</h2>
                <div className='mt-3 aspect-[1.8/1] h-[320px] w-full rounded-md bg-red-400 bg-[url(https://images.unsplash.com/photo-1597382048067-7923725a1524?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center object-cover'></div>
              </a>
            </div>
          </div>
        </nav>

        <Button
          id='nav-toggle'
          type='button'
          onClick={toggle}
          className='z-3 pointer fixed bottom-12 left-1/2 h-20 w-20 -translate-x-1/2 rounded-[5rem] border-none bg-white shadow-black outline-none transition-transform duration-300 ease-in hover:scale-125 dark:invert'>
          <i
            className={`open duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform ease-in hover:scale-125 ${
              isOpen
                ? 'hover:opacity-100 duration-300 opacity-0 transform translate-x-[-50%] scale-1'
                : 'opacity-0 transform duration-300 translate-x-[-50%] scale-0'
            }`}>
            <Menu className='h-8 w-8 fill-current' />
          </i>
          <i
            className={`close duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform ease-in hover:scale-125 ${
              !isOpen
                ? 'opacity-100 transform duration-300 translate-x-[-50%] scale-1'
                : 'opacity-0 transform duration-300 translate-x-[-50%] scale-0'
            }`}>
            <X className='h-8 w-8 fill-current' />
          </i>
        </Button>
      </div>
    </>
  )
}
