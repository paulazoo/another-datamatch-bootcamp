import React, {useState} from 'react'

export default function CardViewer({cards, switchMode, ...props}) {
  const [front, setFront] = useState(true)
  const [i, setI] = useState(0)

  return cards && (
    <div>
      <p>{'Card '+(i+1)+'/'+cards.length}</p>
      <h2>Card Viewer</h2>
      <button onClick={() => setI(i-1)} type='button' disabled={i === 0}>back</button>
      <div onClick={() => setFront(!front)}>{(front ? (cards[i].front) : (cards[i].back))}</div>
      <button type='button' disabled={i === cards.length - 1} onClick={() => setI(i+1)}>fwd</button>
      <hr />
      <button onClick={switchMode}>Go to card editor</button>
  </div>
  )
}
