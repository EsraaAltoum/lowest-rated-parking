import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import {Input} from 'semantic-ui-react'

class SearchBox extends React.Component{
    render() {

        return(
            <Input {...this.props}/> 
        )
    }
}

export default SearchBox;