"use client";

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
  const onSendEmail = () => {
    window.open(`mailto:${unmask('whtpibn@hnbjm.dpn')}`)
  }

  return <p onClick={onSendEmail} className="cursor-pointer">
    <code>[lastname]</code> at stanford dot edu
  </p>
}
