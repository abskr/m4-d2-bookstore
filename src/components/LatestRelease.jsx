import React from 'react'
import romanceList from '../data/romance.json'
import historyList from '../data/history.json'
import fantasyList from '../data/fantasy.json'
import scifiList from '../data/scifi.json'
import horrorList from '../data/horror.json'
import { Button, Card, Container, Row } from 'react-bootstrap'

const allList = romanceList.concat(historyList, fantasyList, scifiList, horrorList)

class LatestRelease extends React.Component {

  state = {
    selectedBook : null
  }

  render () {
    return (
      <Container>
        
        <Row className="justify-content-center">
          {
            allList.map(book => (
              <Card key={book.category + book.asin} style={{ width: '18rem' }}>
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
    <Button variant="primary">Add to cart</Button>
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