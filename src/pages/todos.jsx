import React from 'react'
import Todos from '../components/todos'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../store/actions/todoActions'
const TodoPage = () => {
    const { todos } = useSelector(state => state.todo)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodos());
    }, [])
    return (
        <div>
            <h1>Todos Page</h1>
            <Todos todos={todos} />
        </div>
    )
}

export default TodoPage