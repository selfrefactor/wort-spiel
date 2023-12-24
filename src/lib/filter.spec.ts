import {data} from '../assets/db.json'
import { count } from './filter'

test('count', () => {
  let result0 = count('Es ist nur Test')
  let result = count(data[0])
  console.log(result0)
  console.log(result)
})