import * as SecureStore from 'expo-secure-store';
import RequestParams from './RequestParams';

class FetchResource {
   fetchSteps = (startDate, endDate) => {
       console.log(""+startDate+ "  "+ endDate)
        return SecureStore.getItemAsync("accessToken")
        .then((token) => {var params = new RequestParams().getStepsParam(startDate, endDate)
             return fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',{
                 method: 'POST',
                 headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                    },
                    body: JSON.stringify(params)
                })
                    .then((response) => {
                        if(response.status == 200) {
                            return response.json()
                        } else {
                            alert(response.status + response.statusText)
                        }
                        })
                    .then((json) => {
                        return json.bucket})
                    .catch((error) => {console.log(error)})
        })
    
    }
}


export default FetchResource