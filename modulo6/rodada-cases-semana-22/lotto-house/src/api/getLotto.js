import axios from "axios";

export const getLotto = async (setData) => {
    try {
        const url = "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
        const lotto = await axios.get(url)

        setData(lotto.data)

    } catch (error) {
        
    }
}
