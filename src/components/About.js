import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Created by the great developers at:</p>
      <h3>One Excession Development Lab</h3>
      <Link to='/'>Return to Tasks</Link>
    </div>
  )
}

export default About
