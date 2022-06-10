import { React } from "react";

export default function UserList(props) {

    return (
        <div className="user-list">
            <h3 id="user-title"> Online Users </h3>
            <div className="ulist">
                <ul className="ulist-ul">
                    {props.users.map((user, index) => (
                        <li className="ulist-name" key={index}>
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fillOpacity="0.01"/><path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z" fill="#002155" stroke="#002155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z" fill="#002155" stroke="#002155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span className="ulist-name-span">
                                {user}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}