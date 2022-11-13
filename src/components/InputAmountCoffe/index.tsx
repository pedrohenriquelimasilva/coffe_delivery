import { Minus, Plus } from 'phosphor-react'
import { InputBase } from './style'

interface InputAmountCoffeProps {
  handleAmountInputCoffe: (operation: boolean) => void
  valueInput: number
}

export function InputAmountCoffe({
  handleAmountInputCoffe,
  valueInput,
}: InputAmountCoffeProps) {
  return (
    <InputBase>
      <span>
        <Plus
          size={14}
          weight="fill"
          className="icon-plus"
          onClick={() => handleAmountInputCoffe(true)}
        />
      </span>

      <input type="text" value={valueInput} />

      <span>
        <Minus
          size={14}
          className="icon-minus"
          weight="fill"
          onClick={() => handleAmountInputCoffe(false)}
        />
      </span>
    </InputBase>
  )
}
