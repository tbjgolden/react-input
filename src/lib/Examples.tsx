import React, { useState } from 'react'
import { Input } from './components/Input'

export const Examples: React.FC = () => {
  const [input, setInput] = useState('')

  return (
    <div>
      <Input label="Fruit" value={input} onChange={(input) => setInput(input)} />
    </div>
  )
}
