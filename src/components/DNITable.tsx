import { type FC } from 'react'
import { type DNIInformation } from '../interfaces'

interface Props {
  dniInformation: DNIInformation | null
}

export const DNITable: FC<Props> = ({ dniInformation }) => {
  if (dniInformation === null) {
    return <></>
  }

  return (
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
