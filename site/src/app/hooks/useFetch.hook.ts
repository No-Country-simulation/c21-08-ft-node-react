import { useState, useEffect } from "react"

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T>()

  useEffect(() => {
    async function getData() {
      const res = await fetch(endpoint)
      const data: T = await res.json()

      setData(data)
    }
    getData()
  }, [endpoint])

  return data
}

export default useFetch
