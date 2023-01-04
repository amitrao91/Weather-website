const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW1pdGt1bWFycmFvIiwiYSI6ImNsY2RldHh0ODJ0cXgzd3Q4dmtuNG9ubm8ifQ.4vmElHcC6rA2OdR0pLp-JQ'
    
    request({url, json:true}, (error, {body})=>{
        
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.features.length===0){//not woking
            callback('Unable to find the location. Try another search.', undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}

module.exports = geocode