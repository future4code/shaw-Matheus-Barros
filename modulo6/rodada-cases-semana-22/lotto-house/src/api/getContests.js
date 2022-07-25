import axios from "axios";

export const getContests = async (setData) => {
    try {
        const url = "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
        const contests = await axios.get(url)

        setData(contests.data)

    } catch (error) {
        
    }
}
