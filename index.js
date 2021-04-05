import { combineReducers} from "redux"

const movieReducer =() =>{
    return[
        {title: 'Spider-Man :HomeComing' , releaseDate :'05-07-2017',rating:7.4,},
        {title: 'Aquaman' , releaseDate: '12-07-2018', rating:7,},
        {title: 'Avangers Infinity War' , releaseDate : '04-25-2018',rating:8.3,},
        {title: 'Guradians of the Galaxy' , releaseDate :'07-30-2014',rating:7.9,},
        {title: 'Black Panther' , releaseDate : '02-13-2018',rating:7.4,}
    ]
}

const selectedMovieReducer =(state= null ,action)=>{
    switch(action.type){
        case'MOVIE_SELECTED':
        return action.payload
        default:
            return state
    }

}

export default combineReducers({
    movies:movieReducer,
    selectedMovie:selectedMovieReducer
})