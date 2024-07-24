// import Image from "next/image";
// import { Inter } from "next/font/google";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import informationA from '../pages';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/terms');
  }, [router]);

  return null;
}

