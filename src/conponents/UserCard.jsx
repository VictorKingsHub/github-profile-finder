import "./styles.css"
function UserCard({ user }) {

    const { avatar_url, followers, following, public_repos, login, url, created_at } = user;

    const createdDate = new Date(created_at)
    return (
        <div className="user-card">
            <div className="avatar">
                <img src={avatar_url} alt="" />
            </div>
            <div className="details">

            <a href={`https://github.com/${login}`}>{login} </a>
            <div>
                <div>
                    <span>Public repo: </span>
                    {public_repos}
                </div>
                <div>
                    <span>Following: </span>
                    {following}
                </div>
                <div>
                    <span>Followers: </span>
                    {followers}
                </div>
            </div>
            <p>
                User joined github on {`${createdDate.getDate( )} ${createdDate.toLocaleString("en-us" , {
                    month: "short"
                })}  ${createdDate.getFullYear()}`}
            </p>
                </div>
        </div>
    )
}

export default UserCard
