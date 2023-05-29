import { Col, Row, Typography } from "antd";
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
import { GOST } from "../../consts";

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
    cosinusF?: ThreePhaseLine[];
    power?: ThreePhaseLine[];
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

const generateCosinusF = (dateTime: Date[]) => {
    return dateTime.map((el) => ({
        dateTime: el,
        value: Number(Math.random().toFixed(3)),
    }));
};

const generatePower = (dateTime: Date[]) => {
    return dateTime.map((el) => ({
        dateTime: el,
        value: Number(Math.random().toFixed(3)),
    }));
};

export const ThreePhase = () => {
    const [singlaPhase, setThreePhase] = useState<ThreePhaseCharLine>();
    const { Title } = Typography;

    const requestGetData = async () => {
        const data = await getThreePhase();

        if (data) {
            const normaldata = mapGetThreePhaseToChartLine(data);

            const cosinusF = {
                label: "cosinusF",
                data: generateCosinusF(
                    normaldata.amperage[0].data.map((el) => el.dateTime)
                ),
            };

            let power = [];
            let colors = [
                {
                    borderColor: "rgba(255, 5, 9, 0.5)",
                    backgroundColor: "rgba(255, 5, 9, 0.5)",
                },
                {
                    borderColor: "rgba(5, 42, 255, 0.5)",
                    backgroundColor: "rgba(5, 42, 255, 0.5)",
                },
                {
                    borderColor: "rgba(5, 255, 78, 0.5)",
                    backgroundColor: "rgba(5, 255, 78, 0.5)",
                },
            ];
            for (let i = 0; i < normaldata.amperage.length; i++) {
                power.push({
                    label: "power " + i,
                    data: [] as CharLineDate[],
                    borderColor: colors[i].borderColor,
                    backgroundColor: colors[i].backgroundColor,
                });

                for (let j = 0; j < normaldata.amperage[i].data.length; j++) {
                    console.log(j);
                    power[i].data.push({
                        dateTime: normaldata.amperage[i].data[j].dateTime,
                        value: Number(
                            (
                                normaldata.amperage[i].data[j].value *
                                normaldata.voltage[i].data[j].value *
                                cosinusF.data[j].value
                            ).toFixed(3)
                        ),
                    });
                }
            }

            normaldata.cosinusF = [cosinusF];
            normaldata.power = power;

            setThreePhase(normaldata);
        }
    };

    useEffect(() => {
        console.log("ThreePhase");
        requestGetData();
    }, []);

    return (
        <div className="ThreePhase">
            <Title level={3} className="SinglePhase__title">
                {GOST}
            </Title>
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

                {singlaPhase?.cosinusF && (
                    <Col span={12}>
                        <CharLine
                            data={singlaPhase.cosinusF}
                            className="page-dashboard__line"
                            title="cosinusF"
                        />
                    </Col>
                )}
                {singlaPhase?.power && (
                    <Col span={12}>
                        <CharLine
                            data={singlaPhase.power}
                            className="page-dashboard__line"
                            title="power"
                        />
                    </Col>
                )}
            </Row>
        </div>
    );
};
