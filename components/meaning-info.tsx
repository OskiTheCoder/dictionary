import type { Meaning } from './main';

export default function MeaningInfo(props: { meanings: Meaning[] }) {
  const { meanings } = props;
  return (
    <div className='py-8'>
      {meanings.map((meaning) => (
        <div className='flex flex-col pb-8'>
          <div className='flex items-center gap-8'>
            <h2 className='font-bold text-2xl italic'>
              {meaning.partOfSpeech}
            </h2>
            <hr className='w-full border-black-4' />
          </div>
          <div className='mt-2 py-2'>
            <p className='text-muted-foreground'>Meaning</p>
            <ul className='my-4 ml-6 list-disc [&>li]:mt-2'>
              {meaning.definitions.map((definition) => (
                <div className='flex flex-col my-4'>
                  <li>{definition.definition}</li>
                  {definition.example && (
                    <p className='mt-2 text-muted-foreground italic'>{`"${definition.example}"`}</p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
