import React, { useEffect, useState } from 'react'

const Home = () => {
    const [userName, setUserName] = useState("")
    const [userDate, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubData(){
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json()

        try {
            if(data){
                setUserData(data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            return <div>Error Occured, {error}</div>
        }

        if(loading){
            return <div>Loading Data, Please, wait!!!</div>
        }

        console.log(data)
    }

    const HandleSubmit = () => {}

    useEffect(()=>{
        fetchGithubData()
    },[userDate])

    return (
        <div className='github-search-wrapper'>
            <div className="search-container">
                <input
                    type="text"
                    name="search-github-name"
                    placeholder='Enter Github Name'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    />
                    <button className="submit" onSubmit={HandleSubmit} >Submit</button>
            </div>

        </div>
    )
}

export default Home
