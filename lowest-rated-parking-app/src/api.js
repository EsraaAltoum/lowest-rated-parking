//js file storing api function



//parking lot function taking location and returning list of parking lots around location
export default function getParkingLots(location) {
    return fetch("http://localhost:9013/parkinglots/"+location,{
        method: "GET", 
    })

    //after fetch, we convert result from promise object to JSON object
    .then(function(result) {
        return result.json()
        
    }) 
    //for each business in JSON, compute a score and add as attribute
    .then(function(result){
        result.businesses.forEach(element => {
            element.score= (element.review_count * element.rating) / (element.review_count + 1)
        });
        //return list of business as final result 
        return result.businesses
    })

  }

