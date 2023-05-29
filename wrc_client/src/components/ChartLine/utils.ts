import { StringifyOptions } from "querystring";
import { CharLineDate } from "./CharLineTypes";

export const sortByDate = (data: CharLineDate[]) =>
    data.sort(
        (a: CharLineDate, b: CharLineDate) =>
            a.dateTime.getTime() - b.dateTime.getTime()
    );

export const getLabel = (data: CharLineDate) =>
    String(data.dateTime.toLocaleTimeString());

export const getLabels = (data: CharLineDate[]) =>
    data.map((data) => getLabel(data));

export const convertCharLineDateToOneDataset = (
    data: number[],
    label: string,
    borderColor?: string,
    backgroundColor?: string
) => ({
    label: label,
    data: data,
    borderColor: borderColor || "rgba(140, 0, 255, 0.5)",
    backgroundColor: backgroundColor || "rgba(140, 0, 255,0.5)",
});

export const getDataSet = (
    info: CharLineDate[],
    label = "value",
    borderColor?: string,
    backgroundColor?: string
) => {
    const data = info.map((inf) => inf.value);

    const datasets = convertCharLineDateToOneDataset(
        data,
        label,
        borderColor,
        backgroundColor
    );

    return datasets;
};

export type GetDataSets = {
    label: string;
    info: CharLineDate[];
    borderColor?: string;
    backgroundColor?: string;
};

export const getDataSets = (data: GetDataSets[]) => {
    const labels = getLabels(data[0].info);
    let datasets = [];

    for (let el of data) {
        datasets.push(
            getDataSet(el.info, el.label, el.borderColor, el.backgroundColor)
        );
    }

    return {
        labels,
        datasets,
    };
};

export const getTableRows = (data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
}) => {
    const getRow = (time: string, index: number) => {
        const keys = [...data.datasets.map((el) => el.label)] as const;

        const init = { key: String(index) } as Record<
            string,
            string | number
        > & {
            key: string;
        };

        init["time"] = time;
        keys.forEach((el, i) => {
            init[el] = data.datasets[i].data[index];
        });

        return init;
    };

    return data.labels.map((label, index) => getRow(label, index));
};

export const getTableColumns = (
    data: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[]
) =>
    data.map((el) => ({
        title: el.label,
        dataIndex: el.label,
        key: el.label,
    }));

type FilterDataByTime = {
    requiredDate?: Date;
    info: CharLineDate[];
};

export const filterDataByTime = ({ requiredDate, info }: FilterDataByTime) => {
    if (!requiredDate) {
        return info;
    }

    return info.filter(
        (el) => el.dateTime.toDateString() === requiredDate.toDateString()
    );

    // data.map((el) => ({
};
