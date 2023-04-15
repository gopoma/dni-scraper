import { type ChangeEvent, useRef, useState, useContext } from 'react'
import { scrapDNI } from '../services'
import { OCRContext } from '../context/OCRContext'

// eslint-disable-next-line
export const useDNIScraper = () => {
  const dniFileRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const { ocrState: { dniInformation }, refreshDNIInformation } = useContext(OCRContext)

  const onDNIFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target?.files?.length === 0) {
      return
    }

    refreshDNIInformation(null)
    setLoading(true)

    const dniFile = (target?.files?.[0] as File)

    scrapDNI(dniFile)
      .then(refreshDNIInformation)
      .catch(alert)
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    dniFileRef,
    loading,
    dniInformation,

    onDNIFileInputChange
  }
}
