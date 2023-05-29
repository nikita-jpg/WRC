import "./matchMedia.mock";
import renderer from "react-test-renderer";
import { Table } from "../components/Table/Table";

describe("<Toggle />", () => {
    it("should render OFF by default", () => {
        const dataSource = [
            {
                key: "1",
                name: "Mike",
                age: 32,
                address: "10 Downing Street",
            },
            {
                key: "2",
                name: "John",
                age: 42,
                address: "10 Downing Street",
            },
        ];

        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Age",
                dataIndex: "age",
                key: "age",
            },
            {
                title: "Address",
                dataIndex: "address",
                key: "address",
            },
        ];

        const tree = renderer
            .create(<Table dataSource={dataSource} columns={columns} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
