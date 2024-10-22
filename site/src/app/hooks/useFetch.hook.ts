import { useState, useEffect } from "react"

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(endpoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const data: T = await res.json()

        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [endpoint])

  return data
}

export default useFetch
