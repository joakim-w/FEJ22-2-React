import { useState } from 'react'

const ToggleButton = ({number}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(state => !state)
  }

  return (
    <div className='ToggleButton'>
      <button onClick={handleToggle} className={`btn ${isOpen ? 'btn-outline' : ''}`}>button nr {number}</button>

      {
        isOpen && (
          <div className='expandable'>
            <p>hej</p>
          </div>
        )
      }
    </div>
  )
}

export default ToggleButton