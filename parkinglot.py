from fastapi import APIRouter
import requests
router= APIRouter()

AUTH_TOKEN = "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx"

@router.get("/parkinglots/{location}")
def get_parking_lots(location: str):
    headers = {
        'Authorization': AUTH_TOKEN
    }
    result= requests.get("https://api.yelp.com/v3/businesses/search?location="+location+"&term=parking", headers= headers)

    if 200 <= result.status_code <= 300:
        return result.json()
    else:
        print("result is:" + str(result.json()))
        return {"message": "An error has occured"}

    