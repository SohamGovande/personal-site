"use client";

import {useState} from "react";

function mask(str: string) {
  // Move every character to the right by 1
  return str.split('').map((char) => {
    const charCode = char.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(charCode + 1)
    } else {
      return char
    }
  }).join('')
}

function unmask(str: string) {
  // Move every character to the left by 1
  return str.split('').map((char) => {
    const charCode = char.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(charCode - 1)
    } else {
      return char
    }
  }).join('')
}

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
