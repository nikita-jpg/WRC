import { ArrowsAltOutlined } from "@ant-design/icons";
import { Button, DatePicker, DatePickerProps, Modal } from "antd";
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
import dayjs from "dayjs";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Table } from "../Table/Table";
import { CharLineProps } from "./CharLineTypes";
import {
    filterDataByTime,
    getDataSets,
    getTableColumns,
    getTableRows,
    sortByDate,
} from "./utils";

import "./CharLine.scss";
import toRna from "./consts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Dataset = {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
};

export type TestProps = {
    labels: string[];
    dataset: Dataset[];
};

export const CharLine = (props: CharLineProps) => {
    const { data, className, title } = props;

    const options = {
        responsive: true,
        elements: {
            point: {
                pointStyle: "line",
            },
        },
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: toRna(title || "", true),
                //text: title,
            },
        },
    };

    let labelInfoData = [];
    let possibleDates = new Set<string>();

    for (const el of data) {
        for (const date of el.data) {
            possibleDates.add(date.dateTime.toDateString());
        }
    }

    const possibleDatesArray = Array.from(possibleDates);

    const [defaultDate] = useState(new Date(possibleDatesArray[0]));

    const [selectedDate, setSelectedDate] = useState(defaultDate);

    for (const el of data) {
        const sortedData = sortByDate(el.data);
        const selectedDates = filterDataByTime({
            requiredDate: selectedDate,
            info: sortedData,
        });

        labelInfoData.push({
            label: el.label,
            info: selectedDates,
            borderColor: el.borderColor,
            backgroundColor: el.backgroundColor,
        });
    }

    const datasets = getDataSets(labelInfoData);

    const [open, setOpen] = useState(false);

    const columns = getTableColumns(labelInfoData);
    const dataSource = getTableRows(datasets);

    const onChange: DatePickerProps["onChange"] = (date, dateString) =>
        setSelectedDate(new Date(dateString));

    return (
        <div className={className + " CharLine"}>
            <div className="header">
                <DatePicker
                    defaultValue={dayjs(defaultDate.toDateString())}
                    onChange={onChange}
                    disabledDate={(current) => {
                        return !possibleDatesArray.includes(
                            current.toDate().toDateString()
                        );
                    }}
                />

                <Button
                    icon={<ArrowsAltOutlined />}
                    onClick={() => setOpen(true)}
                />
            </div>
            <Table dataSource={dataSource} columns={columns} />
            <Modal
                // title={title || ""}
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Line options={options} data={datasets} />
            </Modal>
        </div>
    );
};
