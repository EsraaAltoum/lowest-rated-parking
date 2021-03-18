//using semantic ui library for ui components
import 'semantic-ui-css/semantic.min.css';
import React from 'react'
//specifically using list, image, and input components
import { List, Image, Input} from 'semantic-ui-react'
//importing parking lot function from api.js
import getParkingLots from './api' 


//converting app from function to class notation
//1. declaring app as class 
class App extends React.Component {
  //create constructor
  constructor(props){
    super(props);
    this.state={
      searchInput: null, 
      parkingLots: null,
    }
  }

  //2. creating render function (empty)
  render() {
//6. making list props
const listProps = {
    size : 'large',
    divided : true,
    animated: true, 
  }
//7. making image props
const imageProps = {
    size : 'small', 
    

  }
//8.making search props
const searchProps = {
    icon: 'search',
    //10.detecting when the enter key is pressed to start search
    onKeyDown: (event)=>{
      if(event.key === 'Enter') {
        // console.log(event)
        if(this.state.searchInput){
          //using search input as location parameter
          getParkingLots(this.state.searchInput).then((res)=>{
            // console.log(res)
            this.setState({parkingLots: res})
          }) 
        }
      }
    },
    //9. keeping track of search input by storing as a variable
    onChange: (event)=>{
        this.setState({searchInput: event.target.value})
        // console.log(this.state.searchInput)
    }
}
// console.log(this.state)
return (
<div className="App">
{/**5. add a search box component**/}
<Input {...searchProps}> 
</Input>
{/**3. create a list object from the semantic ui template**/}
<List {...listProps}> 

{/**11. using the map function to insert a list item for each of the parking lots that the api returns **/}
{this.state.parkingLots?
this.state.parkingLots.sort((a, b) => (a.score > b.score) ? 1 : -1).map(business=>{
  return (
  /**4. add a dummy list item with the structure needed **/
  <List.Item href={business.url}>
    {/**12. using image from parking lot api if avaliable  **/}
    <Image {...imageProps} src={business.image_url?business.image_url:'https://react.semantic-ui.com/images/wireframe/image.png'
    } />
    <List.Content>
      {/**14. putting business name from api **/}
    <List.Header as='a'>{business.alias} </List.Header>
    {/**13.filling in business details from api **/}
    <List.Description>
      address:{business.location.address1}
      <br/>
      rating:{business.rating}
      <br/>
      review count:{business.review_count}
      <br/>
      score: {business.score}
    </List.Description>
    </List.Content>
    </List.Item>);
})
//making sure only to perform the mapping when business exist
:null}

</List>

</div>
);
  }
}

export default App;
