import { useState } from 'react';

export default function Counter(props) {
  const [counterVal, setCounterVal] = useState(
    props.starting !== undefined ? props.starting : 0
  );
  const [showInputs, setShowInputs] = useState(false);
  const [counterTitle, setCounterTitle] = useState(props.name || 'Counter');

  function counterPlus() {
    setCounterVal(counterVal + 1);
  }
  function counterMinus() {
    setCounterVal(counterVal - 1);
  }

  function handleShow() {
    setShowInputs(true);
  }

  function handleHide() {
    setShowInputs(false);
  }

  function handleInput(e) {
    console.log(props);
    setCounterTitle(e.target.value);
  }
  console.log(props);
  return (
    <div>
      <div className='card'>
        <h2>{counterTitle}</h2>
        <p className='counterVal'>{counterVal}</p>
        <div>
          <button onClick={counterPlus}>Up</button>
          <button onClick={counterMinus}>Down</button>
        </div>
      </div>
      <hr />
      {!showInputs && <button onClick={handleShow}>Show control</button>}
      {/* show this block only after button above was clicked */}
      {showInputs && (
        <div className='counterTitleBlock'>
          {/* double bind this input with a state */}
          <input
            type='text'
            placeholder='set counter Title'
            onChange={handleInput}
            value={counterTitle}
          />
          <button onClick={handleHide}>hide control</button>
        </div>
      )}
    </div>
  );
}
