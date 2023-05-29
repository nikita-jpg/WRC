import { Table as AntdTable } from "antd";

export type TableColumn = {
    title: string;
    dataIndex: string;
    key: string;
};

export type TableRow = {
    key: string;
    [index: string]: string | number;
};

export type TableProps = {
    columns: TableColumn[];
    dataSource: TableRow[];
};

export const Table = ({ columns, dataSource }: TableProps) => {
    const tableColumns = [
        {
            title: "Время",
            dataIndex: "time",
            key: "time",
        },
        ...columns,
    ];

    return (
        <AntdTable
            dataSource={dataSource}
            columns={tableColumns}
            size="small"
        />
    );
};
