export type CharLineDate = {
    dateTime: Date;
    value: number;
};

export type CharLineProps = {
    data: {
        label: string;
        data: CharLineDate[];
        borderColor?: string;
        backgroundColor?: string;
    }[];
    className?: string;
    title?: string;
};
