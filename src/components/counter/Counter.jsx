import { useState } from 'react';

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <p className='counterVal'>{counterVal}</p>
      <div>
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
  );
}
