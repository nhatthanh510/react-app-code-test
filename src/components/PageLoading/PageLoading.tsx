import React from 'react'
import SpinnerIcon from 'components/PageLoading/SpinnerIcon'

const PageLoading: React.FC<{
    isLoading: boolean,
}> = ({ isLoading }) => {
    if (!isLoading) return null
    return (
        <div className="fixed top-0 left-0 z-50 h-full w-full ">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
            <div className="absolute top-1/2 left-1/2 z-50 child:text-white">
                <SpinnerIcon />
            </div>
        </div>
    )
}
export default PageLoading