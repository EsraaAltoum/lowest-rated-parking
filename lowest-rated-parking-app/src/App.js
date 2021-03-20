import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import {List} from 'semantic-ui-react'
import ResultCard from './components/ResultCard'
import SearchBox from './components/SearchBox'
import getParkingLots from './api'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchInput: null, 
      parkingLots: null,
    }
  }

  render() {
    const searchProps = {
      icon: 'search',
      onKeyDown: (event)=>{
        if(event.key === 'Enter') {
          if(this.state.searchInput){
            getParkingLots(this.state.searchInput).then((res)=>{
              this.setState({parkingLots: res})
            }) 
          }
        }
      },
      onChange: (event)=>{
          this.setState({searchInput: event.target.value})
      }
    }

    const listProps = {
      size : 'large',
      divided : true,
      animated: true, 
    }


return (
<div className="App">
  <SearchBox {...searchProps}/>
  <List {...listProps}>
    {
      this.state.parkingLots ?
      this.state.parkingLots.sort((a, b) => (a.score > b.score) ? 1 : -1).map(business => {
        return (
          <ResultCard {...business}/>
          );
      })
      : null
    }
  </List>

</div>
);
  }
}

export default App;
