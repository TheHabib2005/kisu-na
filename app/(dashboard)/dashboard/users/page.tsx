import React, { Suspense } from 'react'

const Users = () => {
    return (
        <Suspense fallback={"Loading"}>Users</Suspense>
    )
}

export default Users