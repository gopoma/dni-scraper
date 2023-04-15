import { type FC } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main className='min-h-screen bg-slate-100 p-4'>
      <section className='lg:max-w-[800px] m-auto p-8 bg-slate-200 flex flex-col gap-8'>
        {children}
      </section>
    </main>
  )
}
