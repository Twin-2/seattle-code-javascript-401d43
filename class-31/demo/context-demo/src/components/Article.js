import { Button, Card, Elevation } from "@blueprintjs/core";

function Article() {

  return (
    <article>

      <Card interactive={true} elevation={Elevation.TWO}>
        <h5><a href="/">Article Title</a></h5>
        <p>Much ado about nothing</p>
        <Button>Send me money</Button>
      </Card>

    </article>
  )
}

export default Article;
