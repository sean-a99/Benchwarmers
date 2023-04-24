import "./sessionForm.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, removeSessionErrors } from "../../store/session";
import SubmitButton from "../Button/SubmitButton";

const SignupForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [borough, setBorough] = useState("");
  const [favoriteSport, setFavoriteSport] = useState();
  const [showSignupFormModal, setSignupFormModal] = useState(false);
  const errors = useSelector(state => state?.sessionErrors)
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeSessionErrors());
    };
  }, [dispatch]);

  const handleFavoriteSportChange = (e) => {
    const selectedValue = e.target.value;
    setFavoriteSport(selectedValue);
  };

  const handleSignupFormModalClose = () => {
    setSignupFormModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      username,
      password,
      bio,
      borough,
      favoriteSport,
    };
    dispatch(signup(user)).then(() => {
      handleSignupFormModalClose();
      onClose();
    });
  };

  return (
    <>
      <div className="sf">
        <br />
        <form
          onSubmit={handleSubmit}
          id="sf-signupForm"
          className="sf-authForm"
        >
          <h1>Welcome to Benchwarmers</h1>
          <br />
          
          <h2>Sign Up</h2>
          <div className="errors">{errors?.name}</div>
      
          <label >
            <input
            className="sf-name-container"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="errors">{errors?.email}</div>
          <label>
            <input
             className="sf-email-container"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="errors">{errors?.username}</div>
          <label>
            <input
             className="sf-username-container"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <div className="errors">{errors?.password}</div>
          <label>
            <input
             className="sf-password-container"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="errors">{errors?.borough}</div>
          <label>
            <select
            className="sf-borough-containter"
              id="borough-dropdown"
              value={borough}
              onChange={(e) => setBorough(e.target.value)}
            >
              <option id="db" value="" disabled selected>
                Select Your Borough
              </option>
              <option value="Bronx">Bronx</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Queens">Queens</option>
              <option value="Staten-Island">Staten Island</option>
            </select>
          </label>
          <div className="errors">{errors?.favoriteSport}</div>
          <label>
            <select
             className="sf-favoriteSport-container"
              id="sf-sport-dropdown"
              value={favoriteSport}
              onChange={handleFavoriteSportChange}
            >
              <option id="db" value="" disabled selected>
                Favorite Sport
              </option>
              <option value="Badminton">Badminton</option>
              <option value="Baseball">Baseball</option>
              <option value="Basketball">Basketball</option>
              <option value="Cycling">Cycling</option>
              <option value="Darts">Darts</option>
              <option value="Fencing">Fencing</option>
              <option value="Football">Football</option>
              <option value="Golf">Golf</option>
              <option value="Hand-Ball">Hand Ball</option>
              <option value="Hockey">Hockey</option>
              <option value="Martial-Arts">Martial Arts</option>
              <option value="Soccer">Soccer</option>
              <option value="Softball">Softball</option>
              <option value="Table-Tennis">Table Tennis</option>
              <option value="Tennis">Tennis</option>
              <option value="Volleyball">Volleyball</option>
            </select>
          </label>
          <br />
          <br />
          <br />
          <SubmitButton className="signUpButton" clickFunction={handleSubmit} textContext='Signup' />
        </form>
      </div>
    </>
  );
};

export default SignupForm;
