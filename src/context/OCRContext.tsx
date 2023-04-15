import { createContext } from 'react'
import { type DNIInformation, type OCRState } from '../interfaces'

interface OCRContextProps {
  ocrState: OCRState
  refreshDNIInformation: (dniInformation: DNIInformation | null) => void
}

export const OCRContext = createContext<OCRContextProps>({} as any)
