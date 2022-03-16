import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { ModalState } from '../atoms/modalAtom'

import { useSelector } from 'react-redux'

import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { changeState } from '../redux/modalSlice'
import { CameraIcon } from '@heroicons/react/outline'
import Image from 'next/image'


function Modal() {
    // const [open, setOpen] = useRecoilState(ModalState)
    const { modal } = useSelector(state => state)
    const dispatch = useDispatch()

    const [selectedFile, setselectedFile] = useState(null)
    const filePickerRef = useRef(null)

    const addImageToPost = (e) => {
        const reader = new FileReader() 

        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setselectedFile(readerEvent.target.result)
        }
    }

  return (
    <Transition.Root show={modal} as={Fragment}>
        <Dialog as='div'
            className='fixed z-10 inset-0 overflow-y-auto'
            onClose={() => dispatch(changeState())}>
                <div className='flex items-end justify-center min-h-[800px]
                sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-800
                        bg-opacity-80 transition-opacity'></Dialog.Overlay>
                    </Transition.Child>
                    {/* centering the modal */}
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen'
                    aria-hidden='true'>
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>  
                            <div className='inline-block align-bottom bg-white rounded-lg
                            px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform
                            transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                                <div >
                                    {selectedFile ? (
                                        <div className='flex flex-col'>
                                            <div className='relative h-56 cursor-pointer'>
                                                <Image 
                                                    className=''
                                                    layout='fill'
                                                    objectFit='cover'
                                                    src={selectedFile} 
                                                    onClick={() => setselectedFile(null)} 
                                                    alt='' />
                                            </div>
                                            <p 
                                                className='text-red-700 font-semibold text-sm mt-2 cursor-pointer'
                                                onClick={() => setselectedFile(null)}>remove</p>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => filePickerRef.current.click()}
                                            className='mx-auto flex items-center justify-center h-12 w-12 rounded-full
                                            bg-purple-100 cursor-pointer'>
                                                <CameraIcon 
                                                    className='h-6 w-6 text-violet-400' 
                                                    aria-hidden='true' />
                                        </div>
                                    )}
                        
                                    <div className='mt-3 text-center sm:mt-5'>
                                        <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                                            Upload a photo
                                        </Dialog.Title>
                                        <div>
                                            <input 
                                                ref={filePickerRef}
                                                type="file" 
                                                hidden
                                                onChange={addImageToPost} />
                                        </div>

                                        <div className='mt-2'>
                                            <input type="text"
                                                className='p-2 border border-1 rounded-md focus:outline-none w-full text-center'
                                                placeholder='Please enter a caption' />
                                        </div>
                                    </div>


                                    <div className='mt-5 sm:mt-6'>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center w-full
                                            rounded-md border border-transparent shadow-sm px-4 py-2
                                            bg-violet-600 text-base font-medium text-white hover:bg-violet-700
                                            focus:outline-none focus:ring-2 focus:ring-offset-2
                                            focus:ring-purple-500 sm:text-sm disabled:bg-gray-300
                                            disable:cursor-not-allowed hover:disabled:bg-gray-300'>
                                                Upload Post
                                        </button>
                                    </div>
                                </div>
                            </div>  
                    </Transition.Child>
                </div>
        </Dialog>
    </Transition.Root>
  )
}

export default Modal