import axios from "axios";
import { DOMEN_SERVER } from "../consts";
import { redirect } from "react-router-dom";

export type GetSinglePhaseResponce = {
    // data: {
    //     date: Date;
    //     time: Date;
    //     voltage: number;
    //     amperage: number;
    //     power: number;
    //     RPower: number;
    //     FPower: number;
    //     Ku: number;
    //     Ki: number;
    //     Kp: number;
    // };

    date: string;
    time: string;
    voltage: number;
    amperage: number;
    power: number;
    RPower: number;
    FPower: number;
    Ku: number;
    Ki: number;
    Kp: number;
};

export const getSinglePhase = async () => {
    try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get<GetSinglePhaseResponce[]>(
            DOMEN_SERVER + "/data/getSinglePhase",
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
