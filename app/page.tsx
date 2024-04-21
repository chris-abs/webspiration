import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import NavMenu from '@/components/ui/nav-menu'
import Image from 'next/image'

export default function Home() {
  return (
    <main
    // className='flex min-h-screen flex-col items-center justify-between p-24'
    >
      {/* <Nav />
      <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>some heading for here</h1>
        <p className='text-2xl text-muted-foreground'>
          some content to live here
        </p>
      </section>
      <div className='flex gap-6 py-6 items-center justify-center'>
        <Button>Learn</Button>
        <Button>Subscribe</Button>
      </div> */}
      <NavMenu />
    </main>
  )
}
