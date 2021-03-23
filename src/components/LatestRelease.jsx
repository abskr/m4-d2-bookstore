import React from 'react'
import romanceList from '../data/romance.json'
import historyList from '../data/history.json'
import fantasyList from '../data/fantasy.json'
import scifiList from '../data/scifi.json'
import horrorList from '../data/horror.json'
import { Button, Card, Container, Row } from 'react-bootstrap'

const latestList = romanceList.slice(0, 3).concat(historyList.slice(0, 3), fantasyList.slice(0, 3), scifiList.slice(0, 3), horrorList.slice(0, 3)).sort((a, b) => (a.title > b.title) ? 1 : -1)

class LatestRelease extends React.Component {

  state = {
    selectedBook : null
  }

  render () {
    return (
      <Container>
        <h1>Latest Release!</h1>
        <Row className="justify-content-center">
          {
            latestList.map(book => (
              <Card className="m-3" key={book.category + book.asin} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
              <b>Price: </b>{book.price}
    </Card.Text>
    <Card.Text>
              <b>Category: </b>{book.category}
              </Card.Text>
    <Card.Text>
              <small className="text-muted"><b>ASIN: </b>{book.asin}</small>
    </Card.Text>
    <Button variant="success">Add to cart</Button>
  </Card.Body>
</Card>
            ))
          }
        </Row>
      </Container>
    )
  }
}

export default LatestRelease