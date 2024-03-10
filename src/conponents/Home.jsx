import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import "./styles.css"

const Home = () => {
    const [userName, setUserName] = useState("VictorKingsHub");
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);

        const data = await response.json()

        try {
            if (data) {
                setUserData(data)
                setLoading(false)
                setUserName("")
            }
        } catch (error) {
            return <div>Something went wrong {error.message}</div>
        }

    }

    const handleSubmit = () => { 
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h3>Please, wait Data is Loading...</h3>
    }

    return (
        <div className='github-profile-wrapper'>
            <div className="input-container">
                <input
                    type="text"
                    name="input-name"
                    placeholder='Enter Github Name'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button className="submit" onClick={handleSubmit} >Submit</button>
            </div>
            <div className="card">
                {userData !== null
                    ? <UserCard user={userData}/>
                    : <div> Username doesn't exist</div>}
            </div>

        </div>
    )
}

export default Home
