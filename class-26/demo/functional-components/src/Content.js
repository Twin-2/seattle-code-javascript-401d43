function Content(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <button onClick={() => props.changeTitle(props.greeting)}>Change Title</button>
    </>
  )
}

export default Content;