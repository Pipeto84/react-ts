import Button from '@mui/material/Button'
import "../styles/TasksPage.css"

export const TasksPage = () => {
  return (
    <div className='tasks'>
      <h1>Tasks</h1>
      <Button href="/" variant="contained" size='large'>Create new list</Button>
    </div>
  )
}
