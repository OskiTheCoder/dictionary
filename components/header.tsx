import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BookA } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

export default function Header({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  return (
    <header className='flex justify-between items-center p-8 w-full'>
      <BookA size={32} />
      <div className='flex justify-between items-center gap-4'>
        <Select onValueChange={onValueChange} defaultValue='font-mono'>
          <SelectTrigger className='w-[140px]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='font-mono'>Monospace</SelectItem>
              <SelectItem value='font-sans'>Sans Serif</SelectItem>
              <SelectItem value='font-serif'>Serif</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{' '}
        |<ModeToggle />
      </div>
    </header>
  );
}
