import { connect } from 'react-redux';
import { When } from 'react-if';

const CurrentCategory = (props) => {
  return (
    <>
      <When condition={!!props.activeCategory}>
        {props.activeCategory}
      </When>
    </>
  )
}

const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory
})

export default connect(mapStateToProps)(CurrentCategory);
