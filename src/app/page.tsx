'use client';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const ANIMALS = [
  'wolf',
  'hawk',
  'bear',
  'cat',
  'dog',
  'elephant',
  'giraffe',
  'lion',
  'tiger',
  'zebra',
];

const storageKey = 'username';
const generateUsername = () => {
  const randomAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const username = `${randomAnimal}-${nanoid(4)}`;
  return username;
};

export default function Home() {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setUsername(stored);
        return;
      }

      const newUsername = generateUsername();
      localStorage.setItem(storageKey, newUsername);
      setUsername(newUsername);
    };

    main();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="spcae-y-8 w-full max-w-md">
        <div className="mtext-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-green-500">{'>'}private_chat</h1>
        </div>

        <div className="mt-4 border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">Your Identity</label>
              <div className="flex items-center gap-3">
                <div className="flex-1 border border-zinc-800 bg-zinc-950 p-3 font-mono text-sm text-zinc-400">
                  {username}
                </div>
              </div>
              <button className="transsition-colors mt-2 w-full cursor-pointer bg-zinc-100 p-3 text-sm font-bold text-black hover:bg-zinc-50 hover:text-black">
                CREATE SECURE ROOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
