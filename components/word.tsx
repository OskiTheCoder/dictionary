import { PlayIcon } from '@radix-ui/react-icons';
import type { Phonetic } from './main';

import { Button } from '@/components/ui/button';

export default function Word(props: { word: string; phonetics: Phonetic[] }) {
  const { word, phonetics } = props;
  const phonetic = phonetics.find(
    (phonetic) => phonetic.text && phonetic.audio
  );
  const audio = new Audio(phonetic?.audio);

  const play = () => {
    audio.play();
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-5xl font-semibold'>{word}</h1>
        <span className='text-xl text-muted-foreground'>
          {phonetic && phonetic.text}
        </span>
      </div>
      {phonetic && (
        <Button variant='outline' onClick={play}>
          <PlayIcon className='mr-2 h-4 w-4' /> Audio
        </Button>
      )}
    </div>
  );
}
