import { ReactElement } from 'react'

interface Props {
  salt?: string
}

const Config = ({ salt }: Props): ReactElement => {
  const handleConfig = (): void => {
    window.electron.ipcRenderer.send('open-file-dialog')
  }

  return (
    <div>
      <button data-testid="config-button" onClick={handleConfig}>
        {salt ? 'Update config file' : 'Select config file'}
      </button>
    </div>
  )
}

export default Config
