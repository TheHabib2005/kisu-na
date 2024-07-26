import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-black/50 flex items-center justify-center"><ClipLoader color="#fff" /></div>
    )
}

export default Loader