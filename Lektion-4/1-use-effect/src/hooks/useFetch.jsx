import { useState, useEffect, useRef } from 'react'

export const useFetch = (url, config) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const option = useRef(config)

    useEffect(() => {

    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true)

      try {
        
        const res = await fetch(url, {
          ...option,
          signal: controller.signal
        })

        // console.log(res)
        if(!res.ok) {
          throw new Error(res.statusText)
        }

        const _data = await res.json()

        setLoading(false)
        setData(_data)
        setError(null)

      } 
      catch (err) {
        if(err.name === 'AbortError') {
          console.log('Fetch aborted')
        } 
        else {
          setError('can\'t fetch the data')
          console.log(err.message)
          setLoading(false)
        }
      }

    }

    fetchData()


    return () => {
      controller.abort()
    }
  }, [url, option])

  return { data, loading, error }
}
