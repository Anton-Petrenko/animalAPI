import 'dotenv/config'
import * as api from './callApi.js'

/**
 * Use api.get to obtain supported information searches.
 * 
 * See the function javadoc for supported searches.
 */

api.get(2, "John Cena")