import "./matchMedia.mock";
import renderer from "react-test-renderer";
import { CharLine } from "../components/ChartLine/CharLine";

describe("<Toggle />", () => {
    it("should render OFF by default", () => {
        const tree = renderer
            .create(
                <CharLine
                    data={[
                        {
                            label: "voltage",
                            data: [
                                {
                                    dateTime: new Date(
                                        "2023-05-24T20:34:19.543Z"
                                    ),
                                    value: 100,
                                },
                            ],
                        },
                    ]}
                    className="page-dashboard__line"
                    title="voltage"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();

        // render(
        //     <CharLine
        //         data={[
        //             {
        //                 label: "voltage",
        //                 data: [{ dateTime: new Date(), value: 1 }],
        //             },
        //         ]}
        //         className="page-dashboard__line"
        //         title="voltage"
        //     />
        // );

        // expect(screen.getByText(/OFF/)).toBeInTheDocument();
    });
});
