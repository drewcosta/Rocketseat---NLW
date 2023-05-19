import React from 'react'
import { cookies } from 'next/headers'
import Copyright from '@/components/Copyright'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import EmptyMemories from '@/components/EmptyMemories'
import Profile from '@/components/Profile'

const page = () => {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 bg-zinc-900">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>
      {/* right */}
      <EmptyMemories />
    </main>
  )
}

export default page
