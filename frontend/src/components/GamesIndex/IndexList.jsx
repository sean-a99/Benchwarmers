import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchGames, fetchSportFilteredGames, resetGames } from '../../store/games';
import IndexItem from './IndexItem';

const IndexList = ({sport}) => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games ? Object.values(state.games) : []);
    
    useEffect(() => {
        console.log(sport)
        if(sport) {
// debugger
            dispatch(resetGames())
            dispatch(fetchSportFilteredGames(sport))
        }
        else {
            dispatch(fetchGames());
        }   
    }, [dispatch, sport])
    

    return(
        <>
            <div id="il-master">
                <div id='il-title'>Upcoming Games:</div>
                {games.map(game => {
                    return <IndexItem key={game._id} game={game} />
                })}
            </div>
        </>
    )
};

export default IndexList;