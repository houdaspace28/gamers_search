import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://api.rawg.io/api',
        params:{
            key: '917564bc3a7a485c8b84c83004794fb7',
        }
    }
)