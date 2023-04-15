import { useState, type FC } from 'react'
import { OCRContext } from './OCRContext'
import { type DNIInformation, type OCRState } from '../interfaces'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialOCRState: OCRState = {
  dniInformation: null
}

export const OCRProvider: FC<Props> = ({ children }) => {
  const [ocrState, setOCRState] = useState<OCRState>(initialOCRState)

  const refreshDNIInformation = (dniInformation: DNIInformation | null): void => {
    setOCRState((prevOCRState) => ({
      ...prevOCRState,
      dniInformation: (dniInformation === null) ? null : { ...dniInformation }
    }))
  }

  return (
    <OCRContext.Provider value={{
      ocrState,
      refreshDNIInformation
    }}>
      {children}
    </OCRContext.Provider>
  )
}
