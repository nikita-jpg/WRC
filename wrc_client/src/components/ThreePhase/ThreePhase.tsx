import { Col, Row } from "antd";
import axios from "axios";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";

import { useEffect, useState } from "react";
import { CharLine } from "../ChartLine/CharLine";
import { CharLineDate } from "../ChartLine/CharLineTypes";
import {
    GetThreePhaseResponce,
    getThreePhase,
} from "../../controllers/getThreePhase";

import "./ThreePhase.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type ThreePhaseLine = {
    label: string;
    data: CharLineDate[];
    borderColor?: string;
    backgroundColor?: string;
};

export type ThreePhaseCharLine = {
    voltage: ThreePhaseLine[];
    amperage: ThreePhaseLine[];
};

const getCharLineDate = (
    el: GetThreePhaseResponce,
    valueName: keyof Omit<GetThreePhaseResponce, "date" | "time">
): CharLineDate => {
    return {
        dateTime: new Date(el.date + "T" + el.time),
        value: el[valueName],
    };
};

const mapGetThreePhaseToChartLine = (data: GetThreePhaseResponce[]) => {
    const res: ThreePhaseCharLine = {
        voltage: [
            {
                label: "voltage 1",
                data: [],
            },
            {
                label: "voltage 2",
                data: [],
            },
            {
                label: "voltage 3",
                data: [],
            },
        ],
        amperage: [
            {
                label: "amperage 1",
                data: [],
            },
            {
                label: "amperage 2",
                data: [],
            },
            {
                label: "amperage 3",
                data: [],
            },
        ],
    };

    for (let el of data) {
        res.voltage[0].data.push(getCharLineDate(el, "voltage1"));
        res.voltage[1].data.push(getCharLineDate(el, "voltage2"));
        res.voltage[2].data.push(getCharLineDate(el, "voltage3"));

        res.amperage[0].data.push(getCharLineDate(el, "amperage1"));
        res.amperage[1].data.push(getCharLineDate(el, "amperage2"));
        res.amperage[2].data.push(getCharLineDate(el, "amperage3"));

        console.log(res);
    }

    return res;
};

export const ThreePhase = () => {
    const [singlaPhase, setThreePhase] = useState<ThreePhaseCharLine>();

    const requestGetData = async () => {
        const data = await getThreePhase();

        if (data) {
            const normaldata = mapGetThreePhaseToChartLine(data);
            setThreePhase(normaldata);

            // console.log(normaldata);
        }
    };

    useEffect(() => {
        console.log("ThreePhase");
        requestGetData();
    }, []);

    return (
        <Row gutter={[24, 24]} style={{ width: "100%" }}>
            <Col span={12}>
                {singlaPhase?.voltage && (
                    <CharLine
                        data={singlaPhase.voltage}
                        className="page-dashboard__line"
                        title="voltage"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.amperage && (
                    <CharLine
                        data={singlaPhase?.amperage}
                        className="page-dashboard__line"
                        title="amperage"
                    />
                )}
            </Col>
        </Row>
    );
};
