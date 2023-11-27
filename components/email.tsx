"use client";

import {useState} from "react"

export default function Email() {
  const [shown, setShown] = useState(false)

  if (!shown) {
    return <p onClick={() => setShown(true)} className="cursor-pointer">
      click to see email address <i>(<code>[lastname]</code> at stanford dot edu)</i>
    </p>
  } else {
    return <p>
      great, you&apos;re not a robot! here you go:{' '}
      <a href='mailto:govande@stanford.edu' className='font-bold'>
        govande@stanford.edu
      </a>
    </p>
  }
}
