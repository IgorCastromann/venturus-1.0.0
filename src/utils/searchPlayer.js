import axios from 'axios'

export default function searchPlayer(value){
    var player = [];

    axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`).then((res)=>{

        console.log('result', res.data)
        player.push(res.data)
    }
    )
    return player
}