import { type FC } from 'react'
import { useDNIScraper } from '../hooks'
import { UploadIcon } from './icons'

export const DNIForm: FC = () => {
  const {
    dniFileRef,
    loading,
    onDNIFileInputChange
  } = useDNIScraper()

  return (
    <form className='flex flex-col lg:w-[50%] m-auto'>
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
        className='text-xl bg-purple-600 hover:bg-purple-800 disabled:bg-slate-600 transition-colors text-white font-bold py-3 flex gap-2 justify-center items-center'
      >
        <UploadIcon
          style={{ width: '1.25rem', height: '1.25rem', fill: '#FFFFFF' }}
        />
        <span>Upload a DNI image</span>
      </button>
    </form>
  )
}
