import axios from "axios";

export const getContestById = async (setData, id) => {
    try {
        const url = `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`
        const contest = await axios.get(url)

        setData(contest.data)

    } catch (error) {
        
    }
}
