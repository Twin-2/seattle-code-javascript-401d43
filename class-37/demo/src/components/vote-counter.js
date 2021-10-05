import { connect } from 'react-redux';
import { increment, disable, reset } from '../store/candidates.js';

const VotesCounter = props => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Candidate:</th>
            <th>Votes:</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map(person => {
            return <tr
              className={person.disabled ? 'disabled' : ''}
              onDoubleClick={() => props.disable(person)}
              onClick={() => person.disabled ? {} : props.increment(person)}
              key={person}
            >
              <td>{person.name}</td>
              <td>{person.votes}</td>
            </tr>
          })}
        </tbody>
      </table>

      <button onClick={props.reset}>Reset!</button>
    </>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates,
  votes: state.votes
})

const mapDispatchToProps = { increment, disable, reset };

// old way of creating prop based dispatchers - the above does the same thing
// const mapDispatchToProps = ({
//   increment: dispatch(increment()),
//   disable: dispatch(disable()),
//   reset: dispatch(reset())
// })

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);