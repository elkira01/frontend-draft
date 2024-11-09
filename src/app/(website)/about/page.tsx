import Image from 'next/image';

export default async function Home() {
  return (
    <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <Image
        className='dark:invert'
        src='/images/logo-fond.png'
        alt='Next.js logo'
        width={180}
        height={38}
        priority
      />
    </main>
  );
}
