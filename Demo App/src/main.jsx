import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  'Click me to visit google'
)
createRoot(document.getElementById('root')).render(
    <>
      <App />
      <p>{reactElement}</p>
    </>
    // if we are putting reactElement outside of <></> then we don't use {}
    // variables(Reference) are passed in {}
)
