const api_key = "YOUR_API_KEY_HERE"
const base_url = "http://api.openweathermap.org/data/2.5/weather?"

function GetTemperature() {

    //get input from text box
    var input = document.getElementsByTagName('input')[0];

    //input value is null or empty?
    if (!input.value) {
        console.log("null or empty")
    } else {
        //assembly the url
        var url = base_url + "q=" + input.value + "&units=metric" + "&appid=" + api_key

        //web request 
        var response_data = fetchAsync(url)

        //Update page after a response is received
        response_data.then((data) => {
            //get updated temperature and location
            var temp = data['main']['temp']
            var loc = input.value + ", " + data['sys']['country'] 

            //update page with new data
            document.getElementById('location-text').innerText = loc
            document.getElementById('temperature-text').innerText = temp

            //clear input box
            input.value = ""
        });
    }

}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }