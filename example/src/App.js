import React from 'react'

import { layouts, components } from 'component-library'
import { Builder } from "./components/Builder/Builder";
import 'component-library/dist/index.css'

const App = () => {
  return <Builder components={components} layouts={layouts} />
}

export default App
