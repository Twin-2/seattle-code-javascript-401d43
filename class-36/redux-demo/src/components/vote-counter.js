import { connect } from 'react-redux';
import { increment, reset } from '../store/votes.js';

const VoteCounter = props => {
  return (
    <section>
      <ul>
        {props.counter.candidates.map(person => {
          return <li onClick={() => props.increment(person.name)} key={person.name}>
            {person.name} - {person.votes}
          </li>
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = { increment, reset };

// this is the same as above - above is shorthand
// const mapDispatchToProps = ({
//   increment: dispatch(increment()),
//   reset: dispatch(reset())
// })

export default connect(mapStateToProps, mapDispatchToProps)(VoteCounter);