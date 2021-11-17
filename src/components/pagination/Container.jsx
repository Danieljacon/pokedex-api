import React from 'react'

const Container = ({ children }) => {
    const style = {
        container: 'flex flex-col justify-center items-center',
    }
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container
