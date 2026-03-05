import { BACKEND_URL } from "@/config"
import axios from "axios"

export const analyzePatient = async (formData:FormData) => {
    const result = await axios.post(`${BACKEND_URL}/api/v1/analyze`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    )

    return result.data;
}