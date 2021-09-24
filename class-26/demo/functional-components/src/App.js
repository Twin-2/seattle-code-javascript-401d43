import './style.scss';
import Content from './Content.js'
import useTitle from './hooks/title.js';

function App() {

  const changeTitle = useTitle(); // the use convention means this is a "hook"

  return (
    <>
      <Content changeTitle={changeTitle} greeting="component a" />
      <Content changeTitle={changeTitle} greeting="component b" />
      <Content changeTitle={changeTitle} greeting="component c" />
      <Content changeTitle={changeTitle} greeting="component d" />
    </>
  )
}

export default App;