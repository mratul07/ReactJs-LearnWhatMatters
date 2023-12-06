import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div className='text-center'>Github followers : {data.followers}
            <img src={data.avatar_url} alt='photo' className='w-28 ' /></div>
    )
}

export default Github