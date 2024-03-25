import axios from 'axios'


var urlDB = {
    1: "https://api.api-ninjas.com/v1/animals",
    2: "https://api.api-ninjas.com/v1/celebrity"
}

/**
 * 
 * @param {*} type 
 * 1 - Animals 
 * 
 * 2 - Celebrities
 * @param {*} keyword A keyword to narrow the search of type as a string
 */
export async function get(type, keyword) {

  type = Number(type)
  keyword = String(keyword)

  if (keyword == ""){
    console.log("Keyword parameter must be populated")
    return
  }

  console.log('Finding matches for ' + keyword + "...")

  const headers = {
    'X-Api-Key': process.env.API_KEY
  }
  const params = {
    name: keyword
  }
  const options = {
    headers: headers,
    params: params
  }

  const APIResponse = await axios.get(urlDB[type], options)
  const response = APIResponse.data

  if (response.length === 0) {
    console.log('No matches found')
    return
  }

  console.log(`Found matches:`)
  response.forEach(element => {
    console.log(element)
  });


}