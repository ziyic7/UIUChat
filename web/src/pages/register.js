import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [userName, setUserName] = useState("");
    const [topic, setTopic] = useState("");
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === "userName") {
            setUserName(e.target.value);
        } else if (e.target.name === "topic") {
            setTopic(e.target.value);
        } else {
            alert("invalid property: " + e.target.name);
        }
    }

    const handleClick = () => {
        if (userList.includes(userName)) {
            alert(`The name ${userName} has been used. Please use another name.`);
            return
        }
        if (userName.length == 0 || userName.length > 15) {
            alert("The length of userName must be in between 1 and 15!!!");
            return
        }
        if (topic === "") {
            alert("You must select a topic!");
            return
        }
        userList.push(userName);
        setUserList(userList);
        navigate(`/chat/${topic}/${userName}`);
    }

    return (
        <div className="reg-container">
            <div className="reg-panel">
                <div className="reg-input">
                    <input type="text" placeholder="Your Username" autoComplete="username" name="userName" value={userName} onChange={handleChange}></input>
                </div>
                <div className="reg-selector">
                    <select name="topic" onChange={handleChange}>
                        <option value="">Please select a topic you interested in</option>
                        <option value="Free Chat">Free Chat</option>
                        <option value="Outdoor Activity">Outdoor Activity</option>
                        <option value="Second-Hand Items">Second-Hand Items</option>
                        <option value="Leasing House/Apt">Leasing House/Apt</option>
                    </select>
                </div>
                <div className="reg-btn">
                    <button onClick={handleClick}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;