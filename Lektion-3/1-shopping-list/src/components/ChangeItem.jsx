import { useState, useRef, useEffect } from 'react'

const ChangeItem = ({ item, changeText }) => {

  const [text, setText] = useState(item.product)
  const textInput = useRef(null)

  useEffect(() => {
    textInput.current.focus()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    changeText(text)
  }

  return (
    <form className='ChangeItem' onSubmit={handleSubmit}>
      <input ref={textInput} value={text} onChange={e => setText(e.target.value)} type="text" />
      <button className='btn btn-check'><i className="fa-solid fa-circle-check"></i></button>
    </form>
  )
}

export default ChangeItem