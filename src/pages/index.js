//this would override the blog theme if it was changed to index.js rather than _index.js
// this is because currently the blog theme is using / as the path for the blog page
import React from 'react'

export default function HomePage() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello, from Gatsby <span role="img" aria-label="hand emoji waving hello">👋</span></p>
    </>
  )
}
