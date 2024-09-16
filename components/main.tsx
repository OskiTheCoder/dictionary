'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Word from './word';

export type Phonetic = {
  text: string;
  audio?: string;
};

type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

type WordEntry = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[] | [];
  meanings: Meaning[];
  sourceUrls?: string[];
};

type DictionaryApiResponse = WordEntry;

function useGetDefinition() {
  const [definitions, setDefinitions] = useState<DictionaryApiResponse>();
  const [error, setError] = useState<boolean>(false);

  const fetchDefinition = async (word: string) => {
    setError(false);
    try {
      const response = await fetch(`/api/definition?word=${word}`);
      if (!response.ok)
        throw new Error('Failed to fetch definition for given word');
      const data = await response.json();
      // just take first definition object for now
      setDefinitions(data.data[0]);
    } catch (err) {
      setError(true);
    }
  };

  return { definitions, error, fetchDefinition };
}

export default function Main() {
  const [word, setWord] = useState('');
  const { definitions, error, fetchDefinition } = useGetDefinition();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (word) {
      await fetchDefinition(word);
    }
  };

  return (
    <main className='p-8'>
      <form onSubmit={handleSubmit}>
        <Input
          type='search'
          placeholder='Enter a word'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
      {error && (
        <div className='flex flex-col gap-4 justify-center items-center py-12'>
          <div className='text-4xl'>🫠</div>
          <h2 className='text-3xl font-semibold'>
            No definition could be found
          </h2>
          <p className='text-xl text-muted-foreground'>
            Sorry friend, we could not find a definition for that word.
          </p>
        </div>
      )}
      {definitions && (
        <div className='py-12'>
          <Word
            key={definitions.word}
            word={definitions.word}
            phonetics={definitions.phonetics}
          />
        </div>
      )}
    </main>
  );
}
