import './style.css'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import { useEffect, useRef } from 'react'
export default function RevealPage() {
  const deckDivRef = useRef<HTMLDivElement>(null) // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null) // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
      // other config options
    })

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.')
      }
    }
  }, [])
  return (
    <div>
      <iframe src="https://koolskull.github.io/mialien-intro/" width="100%" height="100%" />
    </div>
  )
}
