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

export default function Header() {
  return (
    <header className='flex justify-between items-center p-8 w-full'>
      <BookA size={32} />
      <div className='flex justify-between items-center gap-4'>
        <Select defaultValue='sans-serif'>
          <SelectTrigger className='w-[120px]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='sans-serif'>Sans Serif</SelectItem>
              <SelectItem value='monospace'>Monospace</SelectItem>
              <SelectItem value='serif'>Serif</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{' '}
        |<ModeToggle />
      </div>
    </header>
  );
}
