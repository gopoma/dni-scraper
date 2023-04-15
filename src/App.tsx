import { useRef, type ChangeEvent, useState } from 'react'
import { scrapDNI } from './services'

type DNIInformation = Record<string, unknown>

function App (): JSX.Element {
  const dniFileRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [dniInformation, setDNIInformation] = useState<DNIInformation | null>(null)

  const onDNIFileInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    if (target?.files?.length === 0) {
      return
    }

    setDNIInformation(null)
    setLoading(true)

    const dniFile = (target?.files?.[0] as File)

    scrapDNI(dniFile)
      .then(setDNIInformation)
      .catch(alert)
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className='lg:max-w-[800px] m-auto p-8 bg-slate-200 flex flex-col gap-8'>
      <header>
        <h1 className='text-5xl font-bold text-center text-purple-800'>
          dni-scraper
        </h1>
      </header>

      <section>
        <form
          className='flex flex-col lg:w-[50%] m-auto'
        >
          <input
            type='file'
            ref={dniFileRef}
            onChange={onDNIFileInputChange}
            style={{ display: 'none' }}
          />

          <button
            type='button'
            onClick={() => { dniFileRef.current?.click() }}
            disabled={loading}
            className='text-xl bg-purple-600 hover:bg-purple-800 disabled:bg-slate-600 transition-colors text-white font-bold py-3'
          >
            Upload
          </button>
        </form>
      </section>

      {
        (dniInformation !== null) && (
          <section className='p-4'>
            <table className='w-full border border-black bg-slate-100'>
              <thead>
                <tr>
                  <th className='border border-black p-2 bg-purple-200'>Field type</th>
                  <th className='border border-black p-2 bg-purple-200'>Value</th>
                </tr>
              </thead>
              <tbody>
                {
                  (dniInformation !== null) && Object.entries(dniInformation).map(([key, value]) => (
                    <tr
                      key={key}
                      className='hover:bg-slate-200'
                    >
                      <td className='border border-black p-2 font-bold'>{key}</td>
                      <td className='border border-black p-2'>{String(value)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </section>
        )
      }
    </section>
  )
}

export default App
