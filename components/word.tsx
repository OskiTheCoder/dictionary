type Phonetic = {
  text: string;
  audio?: string;
};

type WordData = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
};
export default function Word(props: WordData) {
  const { word, phonetic = '', phonetics = [] } = props;
  return (
    <div>
      <div>
        <h2>{word}</h2>
      </div>
    </div>
  );
}
