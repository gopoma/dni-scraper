import { config } from '../config'

const OCR_URL = `${config.apiURL}/ocr`

interface SuccessResult {
  success: true
}

interface ErrorResult {
  success: false
  message: string
}

type DNIInformation = Record<string, unknown>

interface ScrapDNIResult extends SuccessResult {
  dniInformation: DNIInformation
}

export const scrapDNI = async (dniFile: File): Promise<DNIInformation> => {
  const formData = new FormData()

  formData.append('dni', dniFile)

  try {
    const response = await fetch(`${OCR_URL}/dni`, {
      method: 'POST',
      body: formData
    })

    const result: ScrapDNIResult | ErrorResult = await response.json()

    if (!result.success) {
      throw new Error(result.message)
    }

    return result.dniInformation
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
