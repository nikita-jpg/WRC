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

import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";

import { SinglePhase } from "../../components/SinglePhase/SinglePhase";
import "./PageDashboard.scss";
import { ThreePhase } from "../../components/ThreePhase/ThreePhase";

const items: TabsProps["items"] = [
    {
        key: "1",
        label: `Однофазная система электроснобжения`,
        children: (
            <div className="page-dashboard">
                <SinglePhase />
            </div>
        ),
    },
    {
        key: "2",
        label: `Трёхфазная система электроснобжения`,
        children: (
            <div className="page-dashboard">
                <ThreePhase />
            </div>
        ),
    },
];
export const PageDashboard = () => {
    const { Title } = Typography;

    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} centered />
        </div>
    );
};
