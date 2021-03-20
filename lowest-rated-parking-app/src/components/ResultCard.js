import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import {List, Image} from 'semantic-ui-react'

class ResultCard extends React.Component{

    render() {
        const imageProps = {
            size : 'small', 
            }

        return(
            <List.Item href={this.props.url}>
                <Image {...imageProps} src={this.props.image_url ? this.props.image_url 
                                            : 'https://react.semantic-ui.com/images/wireframe/image.png'
                                            } />
                <List.Content>
                    <List.Header as='a'>{this.props.alias} </List.Header>

                    <List.Description>
                    address:{this.props.address1}
                    <br/>
                    rating:{this.props.rating}
                    <br/>
                    review count:{this.props.review_count}
                    <br/>
                    score: {this.props.score}
                    </List.Description>
                </List.Content>
            </List.Item>
        )
    }
}

export default ResultCard;
