import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import { category } from '../store/categories.js';

const Categories = props => {
  return (
    <>
      <ButtonGroup>
        {props.categories.map(category => {
          return <Button
            key={category.name}
            onClick={() => props.category(category.name)}
          >
            {category.displayName}
          </Button>
        })}
      </ButtonGroup>
    </>
  )
}

const mapStateToProps = state => ({
  categories: state.categories.categoryList
})

const mapDispatchToProps = { category };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);