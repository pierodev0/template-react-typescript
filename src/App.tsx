
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-sky-300 text-center text-3xl font-bold underline'>
        Hello world!
      </h1>
      <Button>Click me </Button>
    </>
  );
}

export default App;
