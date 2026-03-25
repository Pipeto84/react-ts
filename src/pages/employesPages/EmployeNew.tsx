import {FormEmployee} from '../../components/FormEmployee'
import '../../styles/employeStyle/FormEmployee.css'

export const New = () => {
  return (
    <div className='container-new-employee'>
      <h1 className='titleEdit'>New Employee</h1>
      <FormEmployee/>
    </div>
  )
}
