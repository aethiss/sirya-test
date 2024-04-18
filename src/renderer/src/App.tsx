import { ReactElement, useEffect, useState } from 'react'

import electronLogo from './assets/electron.svg'
import Config from './components/config/Config'
import { ipcRenderer } from 'electron'

const App = (): ReactElement => {
  const [salt, setSalt] = useState<string>('')
  console.log('🚀 ~ salt =>', salt)

  useEffect(() => {
    ;(async (): Promise<void> => {
      const result = await ipcRenderer.invoke('openConfigFile')
      result && setSalt(result.salt)
    })()
  }, [])

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <Config salt={salt} />
    </>
  )
}

export default App
