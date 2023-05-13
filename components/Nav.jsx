'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-14 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/cloud.png"
          alt="logo"
          width={40}
          height={340}
          className="object-contain"
        ></Image>
      </Link>
    </nav>
  );
};

export default Nav;
