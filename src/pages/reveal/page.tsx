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
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <section>
            <h1>KODEX SLIMENTOLOGIKA</h1>
            <p>
              or "OW2BKOOL", as received and transcribed by Juan Manuel Larrazabal
              <br /> in Los Angeles, California, USA, Surface Earth.
            </p>
          </section>
        </section>

        <section>
          <p>For my children; I sure hope you find something useful here.</p>
        </section>

        <section>
          <p>
            "OW2BKOOL" was originally a book I drafted in 2014 when I lived in Portland, Oregon. I did not release it
            because I felt it needed another decade or so of development. If I were to compose literature that I can be
            proud of, I decided that I must take my time as any pretentious academic would. I grant myself accreditation
            and authority to execute creative tasks, but that self-permission-granting is not accomplished without
            proper due diligence, experimentation, editing, and recomposing in an iterative fashion that allows only the
            most essential and important fractals to be amplified.
          </p>

          <p>
            That same year, (2014) I released an instrumental breakcore/techno thrash album made on Nanostudio with an
            iPhone 4 titled "OW2BKOOL". This album made very few heads turn at the time of its release, but I think it's
            when I really started to feel like I had full control of my mastering abilities and the audio spectrum
            itself.
          </p>
        </section>

        <section>
          <p>
            In 2015, I became persona non grata from baseless accusations espoused by corrupted people who were
            absolutely mystified by the tempting allure of social currency; throwing their own previously beloved friend
            and source of creative encouragement under the proverbial bus of popular disgrace in exchange for their
            perceived superiority.
          </p>
          <p>
            ever since them I have had to learn how to go my own path without the assistance or social niceties
            associated with a greater commuinity.
          </p>
          <p>
            overall, I have found specific people directly whom have specifically aided and encouraged me on my heavenly
            endeavors, but in general, the only consistence assistance and aide that I have recognized has been in the
            will of GOD. Even when kind beloved souls whom are too many to count or accurately credit outside of some
            spiritual record keeping method, GOD was leading such efforts, and the most truly humble of those humans or
            angels are definetly willing to admit so as well.
          </p>
          <p>
            I would encourage anyone, at all times, to be inifinitely grateful and proud to be lead by the most
            infinite, powerful, and benevolent GOD above all creation. this never-ending prayer will help you in all
            times of life, and it has been my constant companion.
          </p>
        </section>

        <section>
          <img src="https://koolskull.com/img/KS.png" width="444" alt="KoolSkull Illustration" />
          <p>
            The above image was illustrated by me in 2017 with ink on archival paper during a personal ritualistic
            prayer in Santa Monica with Andrew Fenlon. Symbols and text are from an alphabet that was revealed to me
            during intensive prayer and fasting. When I prayed, the alphabet revealed itself, and I proceeded to write
            down the eight different sections of slimentology that I originally scribbled in English but ended up not
            preserving. The drawing was lost during numerous moves, but the digital memory remains. I lost the
            alphabetical translations but have retranslated recently in order to present this multimedia experience with
            you and hopefully spark a fire of creativity and joy within your own heart that is never easily extinguished
            by lower-dimensional frequencies that intend to stray you from your GOD-given path.
          </p>
        </section>
        <section>
          I've always had a SEAMLESS understanding of Christianity; not that I always prefectly represented the ideal
          Christian, but I understood the perfect objective truth about the existence of GOD the almighty without any
          moment of logical disagreement. I may or may not have had some particular disagreements with my spiritual
          leaders, pastors, or parental units, but the concept of GOD above all creation, sending his only son in order
          to take our place in the karmic wheel, and to reset the entire chess board in our favor, only seemed to be
          absolutely perfect and blatantly obvious to me.
          <br />
          <br />I understand how this may seem somehow confusing, fantastical, or less obvious to others, but after an
          active series of decades researching deeper into the rabbit hole and lived experiences, these concepts have
          only become more concretely solidified into my subconscious. All other explanations seem so silly to me that
          it is a weakness of mine to dismiss when others appear to disagree. often I do infact find agreement with
          deeper discussion, but my emotional human reaction is to dismiss anyone who remotely appears to lack faith in
          what to me is an obvious objective reality.
        </section>

        <section>
          <section>
            <h1>INTRODUCTION</h1>
            <p>
              In the following body of work are compressed packets of light-code transmissions and
              biological/interdimensional upgrades for your physical body as well as your etheric light body. For many
              humans, light has already replaced every carbon-based molecule in their physical being with biophotons
              that appear/interact with the Third-dimensional physical existence just as any other physical object.
            </p>
          </section>

          <section>
            <p>
              There are many other sources of information about the energetic forecast on this planet for the next
              handful of thousands of years, but this particular perspective is only intended for "Discipleship" by its
              creator, ME, and nobody else. My best suggestion would be to make note of all the other references that
              mirror aspects, but before all other references of literature, art, or music, you ought to sit silently in
              peace with GOD and allow The Holy Spirit to guide you to what GOD has in store for you specifically.
            </p>
          </section>

          <section>
            <p>
              The time of followers is over; if you need to learn, position yourself as a student, and if you are
              required to teach, confidently teach what you know so well that it is explained with ease.
            </p>
          </section>

          <section>
            <p>
              My methods are intended to be perfected and refined with time, but are based on essential, modular
              building blocks that are as ancient and irreducibly complex as anything else in GOD's everlasting,
              infinite universe.
            </p>
          </section>

          <section>
            <h2>
              ALL THINGS MAY BE HACKED OR MANIFESTED BY THE HONEST AND THOSE WITH MALINTENT ALIKE, BUT ALL TRUE EVIL IS
              AGGRESSIVELY PUNISHED WITHOUT CONSIDERATION BY THE FATHER, LORD THY GOD IN BALANCED INTERCHANGE.
            </h2>
          </section>
        </section>

        <section>
          <h1>DISCLAIMER</h1>
          <ul>
            <li>
              Verbose explanations and dry language about inter-dimensional portals which may potentially be wrongfully
              misinterpreted. Tread carefully.
            </li>
            <li>
              Slimentology is a religious doctrine that I, Juan Manuel Larrazabal, follow by myself and will reject all
              followers.
            </li>
            <li>
              Researchers and those interested are encouraged to question all concepts, use discernment when translating
              all forms of communication, then develop their own personal doctrine and Visual Vocabulary.
            </li>
            <li>Strong leaders are needed for inter-dimensional warfare.</li>
            <li>
              Put this text down and focus on your work. Come back to it when you are fully focused and out of the hole
              of procrastination.
            </li>
            <li>
              Depression and sadness are not allowed or recommended while reading this text. If you are heavily burdened
              by some thought form or pressing matter, sort it out physically or psychically and only discern these
              transmissions once you have decided to set aside the mask of bitterness. I too have come from "bummer
              beginnings" in numerous ways, but this work is intended to ignore personal details in exchange for
              technical, tangible, and objective research used to encourage or foster your own creative and personal
              development; hopefully aggregating into a healthy culture of PRO-CREATIVE, PROGENERATIVE humans who enjoy
              and develop the most beautiful creations in honor of the INFINITE GOD that brings all energy, love, and
              sustenance.
            </li>
            <li>
              Do your own research. My information should be qualified as "findings" rather than fact or fiction.
              Discernment is constantly necessary for properly translating thought-forms presented in this work, but
              also in any other work made in any written language.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
