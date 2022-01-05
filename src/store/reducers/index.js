import categoryData from '../../service/categoryData'


const INITIAL_STATE = {
    data:categoryData,
    filtered: null,
    favorit: [],
}

const Reducer = (state = INITIAL_STATE, action) =>{
    return state
}

export default Reducer