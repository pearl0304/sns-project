import React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => {
    return <nav>
        <ul>
            <li>
                <Link to={'/feed'}>Feed</Link>
            </li>
            <li>
                <Link to={'/chat'}>Chat</Link>
            </li>
            <li>
                <Link to={'/write'}>Write</Link>
            </li>
            <li>
                <Link to={'/mypage'}>MyPage</Link>
            </li>
        </ul>
    </nav>
}