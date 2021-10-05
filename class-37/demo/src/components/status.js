import { connect } from 'react-redux';

const Status = props => {

  return (
    <>
      <span>Total Votes:{ props.votes.totalVotes }</span>
    </>
  )
}

const mapStateToProps = state => ({
  votes: state.votes,
  candidates: state.candidates
})

export default connect(mapStateToProps)(Status);