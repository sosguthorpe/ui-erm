import React from 'react'
import {observable} from 'mobx'
import { observer } from 'mobx-react'
import { hot } from 'react-hot-loader'
import { Container, Row, Col } from 'reactstrap'
import Search from '../../components/search'

import UrlParamResourceSearch from '../../lib/resource/url-param-resource-search'
import {tableFormatters, textHighlighter} from '../../lib/helpers'


const Kb = observer((props) => {
  
  return (
    <Container fluid={true}>
      <Row>
        <Col lg="3" xs="12" className="position-fixed" >
          <h1>KB</h1>
          <button className="btn btn-primary" onclick="this.handleTest()">Test</button>
        </Col>
      </Row>
    </Container>
  )
})

export default hot(module)(Kb)