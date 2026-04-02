import { useDispatch, useSelector } from "react-redux";
import { up, Dow, Reset } from "../../actions/counter";
function Counter() {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={() => dispatch(up(5))}>UP</button>
            <button onClick={() => dispatch(Dow())}>Dow</button>
            <button onClick={() => dispatch(Reset())}>Reset</button>

        </>
    )
}
export default Counter