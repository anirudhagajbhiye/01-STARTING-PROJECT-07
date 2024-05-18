
import classes from './Counter.module.css';

import { useSelector, useDispatch} from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.county.counter);//does the job of subscriber, counter will keep updating

  const showCounter = useSelector((state) => state.county.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({type:"toggle"});
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
     // dispatch({type:INCREMENT});
     dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    //dispatch({type:DECREMENT});
    dispatch(counterActions.decrement());
  };
  const increaseHandler = (state,action) => {
   // dispatch({type:"incrementBy5",amount:5});
   
   dispatch(counterActions.increase(10));
   
   //{type:"SOME_UNIQUE_IDENTITY", payload:10}
   //in place of 5 we can pass object payload:{name:"ram", age:21} can access as state.counter = state.counter + action.payload.age
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* showcounter only if counter is there */}
      {showCounter && (<div className={classes.value}>{counter}</div>)}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>IncreaseBy10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
