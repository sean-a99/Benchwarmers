import './navBar.css';
import fullLogo from '../../assets/logo-full.png';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import SignupFormModal from '../SessionForms/SignupFormModal';
import LoginFormModal from '../SessionForms/LoginFormModal';
import CreateGameModal from '../GamesForm/CreateGameModal';
import { useEffect } from 'react';
import { getCurrentUser } from '../../store/session';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session?.user?._id)
    const history = useHistory();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch, userId])

    function handleLogout(e) {
        dispatch(logout());
        history.push(`/`)
    }

    let loggedOutButtons
    if(!userId){
        loggedOutButtons = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        )
    }

    let loggedInButtons;
    if(userId){
        loggedInButtons = (
            <>
                <CreateGameModal />
                <Link to={`/user-profile/${userId}`}>
                    <div>Profile</div>
                </Link>
                <div onClick={handleLogout}>Log Out</div>
            </>
        )
    }

    return(
        <div id="nb-master">
            <div id="nb-logo">
                <Link to="/">
                    <img id="nb-logoPic" src={fullLogo} alt="full-logo" />
                </Link>
            </div>

            <div id="nb-rightLinks">
            <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/games">
                    <div>Join Game</div>
                </Link>
                {loggedOutButtons}
                {loggedInButtons}
            </div>
        </div>
    )
};

export default NavBar;