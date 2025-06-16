import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/'>
          <Image src='/logo.png'
          />
        </Link>
      </nav>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </header>
  )
}

export default Header;