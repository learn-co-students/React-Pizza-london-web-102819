
const PIZZA_URL = "http://localhost:3000/pizzas"

const GET_ALL_PIZZA = () => {
   return fetch(PIZZA_URL).then(resp => resp.json())
}


export default { GET_ALL_PIZZA }