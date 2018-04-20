import React from 'react'
import {observable} from 'mobx'
import { observer } from 'mobx-react'
import { hot } from 'react-hot-loader'
import { Container, Row, Col } from 'reactstrap'
import stringReplace from 'react-string-replace'

import ResourceBasedTable from './lib/resource/resource-based-table'
import {tableFormatters} from './lib/helpers'
import Nav from './layout/nav'

const Platforms = observer((props) => {
  
  let stringHighlighter = (value) => {
    
    // Return as is...
    const find = props.app.queryStringObject.term
    if (!value || value == '' || !find || find == '') return value
    
    let escSearchText = find.replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
    let text = value
    
    text = stringReplace(text, new RegExp(`(${escSearchText})`, 'gi'), (match, i) => (
      <strong key={i} style={{'borderBottom': '1px dotted', 'fontSize': '1.15rem'}}>{match}</strong>
    ));
    
    return text
  }
  
  let searchIn = [
    'name'
  ]

  let columns = [
    {
      Header: "Name",
      id: 'name',
      accessor: d => ({name: d.name, id: d.id}),
      Cell: tableFormatters.pipe( (cell) => (stringHighlighter(cell.value.name)), (previous, cell) => (<a href={`#${cell.value.id}`}>{previous}</a>) )
    }
  ]
  
  return (
    <div>
      <Nav app={props.app} />
      <Container fluid={true}>
        <Row>
          <Col lg="3" xs="12" >
            <div className="position-fixed" >
              <h2>Filters</h2>
            </div>
          </Col>
          <Col lg="9" xs="12" ><ResourceBasedTable resource="Platform" searchIn={searchIn} columns={columns} app={props.app} /></Col>
        </Row>
      </Container>
    </div>
  )
})

export default hot(module)(Platforms)
