import { ReactElement } from 'react'

import electronLogo from './assets/electron.svg'
import Config from './components/config/Config'

const App = ():ReactElement => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <Config />
    </>
  )
}

export default App
