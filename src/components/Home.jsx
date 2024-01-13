
import style from './Home.module.css'

import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div id={style.home} >

            <h2>Sign Up Here</h2>

            <div className={style.links}>
                <Link to="/">Create</Link>

                <Link to="users"> Users</Link>
            </div>
        </div>
    )
}
export default Home