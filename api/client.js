import axios from "axios";


export default getRandomQuote = async () => {
    await axios.get("https://api.quotable.io/random").then((response) => {
        console.log(response.data);
    });
}
