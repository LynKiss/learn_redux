import { useDispatch, useSelector } from "react-redux";
import { up, Dow } from "../../actions/counter";
function Counter2() {
    const counter2 = useSelector(state => state.counterReducer);

    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter2 : {counter2}</h2>
            <button onClick={() => dispatch(up(2))}>UP</button>
            <button onClick={() => dispatch(Dow(3))}>Dow</button>
        </>
    )
}
export default Counter2