
import React, { Component } from 'react'; // Import React.

// Import Bootstrap Components: (Import each component ont at a time to save space).
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Import My Components:
import DefaultGraphs from '../Components/Parts/DefaultGraphs';

class Default extends Component {
    render() {
        return (
            <Container fluid style={{padding: '5px', backgroundColor: '#293742', alignSelf: 'center'}}>
				<Row style={{ width: '100%'}}>
					<DefaultGraphs style={{ alignSelf: 'center' }} data={this.props.data} retrievalType={this.props.retrievalType}/>
				</Row>
			</Container>
        );
    }
}

export default Default;