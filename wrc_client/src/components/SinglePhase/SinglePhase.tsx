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
import { CharLine } from "../../components/ChartLine/CharLine";
import { CharLineDate } from "../../components/ChartLine/CharLineTypes";
import {
    GetSinglePhaseResponce,
    getSinglePhase,
} from "../../controllers/getSinglePhase";

import "./SinglePhase.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export type SinglePhaseCharLine = {
    voltage: CharLineDate[];
    amperage: CharLineDate[];
    power: CharLineDate[];
    RPower: CharLineDate[];
    FPower: CharLineDate[];
    Ku: CharLineDate[];
    Ki: CharLineDate[];
    Kp: CharLineDate[];
};

const mapGetSinglePhaseToChartLine = (data: GetSinglePhaseResponce[]) => {
    const res: SinglePhaseCharLine = {
        voltage: [],
        amperage: [],
        power: [],
        RPower: [],
        FPower: [],
        Ku: [],
        Ki: [],
        Kp: [],
    };

    const getCharLineDate = (
        el: GetSinglePhaseResponce,
        valueName: keyof Omit<GetSinglePhaseResponce, "date" | "time">
    ): CharLineDate => {
        return {
            dateTime: new Date(el.date + "T" + el.time),
            value: el[valueName],
        };
    };

    for (let el of data) {
        res.voltage.push(getCharLineDate(el, "voltage"));
        res.amperage.push(getCharLineDate(el, "amperage"));
        res.power.push(getCharLineDate(el, "power"));
        res.RPower.push(getCharLineDate(el, "RPower"));
        res.FPower.push(getCharLineDate(el, "FPower"));
        res.Ku.push(getCharLineDate(el, "Ku"));
        res.Ki.push(getCharLineDate(el, "Ki"));
        res.Kp.push(getCharLineDate(el, "Kp"));
    }

    return res;
};

export const SinglePhase = () => {
    const [singlaPhase, setSinglePhase] = useState<SinglePhaseCharLine>();

    const requestGetData = async () => {
        const data = await getSinglePhase();

        if (data) {
            const normaldata = mapGetSinglePhaseToChartLine(data);
            setSinglePhase(normaldata);
        }
    };

    useEffect(() => {
        console.log("SinglePhase");
        requestGetData();
    }, []);

    return (
        <Row gutter={[24, 24]} style={{ width: "100%" }}>
            <Col span={12}>
                {singlaPhase?.voltage && (
                    <CharLine
                        data={[
                            {
                                label: "voltage",
                                data: singlaPhase?.voltage,
                            },
                            {
                                label: "voltage max",
                                data: singlaPhase?.voltage.map((el) => ({
                                    dateTime: el.dateTime,
                                    value: 220,
                                })),
                                borderColor: "rgba(255, 5, 9, 0.5)",
                                backgroundColor: "rgba(255, 5, 9, 0.5)",
                            },
                            {
                                label: "voltage min",
                                data: singlaPhase?.voltage.map((el) => ({
                                    dateTime: el.dateTime,
                                    value: 198,
                                })),
                                borderColor: "rgba(0, 34, 255, 0.5)",
                                backgroundColor: "rgba(0, 34, 255, 0.5)",
                            },
                        ]}
                        className="page-dashboard__line"
                        title="voltage"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.amperage && (
                    <CharLine
                        data={[
                            {
                                label: "amperage",
                                data: singlaPhase?.amperage,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="amperage"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.power && (
                    <CharLine
                        data={[
                            {
                                label: "power",
                                data: singlaPhase?.power,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="power"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.RPower && (
                    <CharLine
                        data={[
                            {
                                label: "RPower",
                                data: singlaPhase?.RPower,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="RPower"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.FPower && (
                    <CharLine
                        data={[
                            {
                                label: "FPower",
                                data: singlaPhase?.FPower,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="FPower"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.Ku && (
                    <CharLine
                        data={[
                            {
                                label: "Ku",
                                data: singlaPhase?.Ku,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="Ku"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.Ki && (
                    <CharLine
                        data={[
                            {
                                label: "Ki",
                                data: singlaPhase?.Ki,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="Ki"
                    />
                )}
            </Col>
            <Col span={12}>
                {singlaPhase?.Kp && (
                    <CharLine
                        data={[
                            {
                                label: "Kp",
                                data: singlaPhase?.Kp,
                            },
                        ]}
                        className="page-dashboard__line"
                        title="Kp"
                    />
                )}
            </Col>
        </Row>
    );
};
