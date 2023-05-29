import axios from "axios";
import { DOMEN_SERVER } from "../consts";
import { redirect } from "react-router-dom";

export type GetThreePhaseResponce = {
    date: string;
    time: string;
    voltage1: number;
    amperage1: number;
    voltage2: number;
    amperage2: number;
    voltage3: number;
    amperage3: number;
};

export const getThreePhase = async () => {
    try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get<GetThreePhaseResponce[]>(
            DOMEN_SERVER + "/data/getThreePhase",
            {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            }
        );

        console.log(data);

        return data;
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            if (err.response.status === 401) {
                console.log("aaaaaa");
                redirect("/login");

                return [];
            } else {
                console.error(err);
            }
        }
    }
};
