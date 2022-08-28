import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Table columns={columns} data={data} actions={actions} />);
  });
});

const columns = [
  {
    text: 'Name',
    dataField: 'name',
    filterable: true,
  }
];

const data = [
  {
    id: 1,
    name: 'Tim Lubo'
  }
];

const actions = {
  route: 'action_url',
  keyField: 'id'
};
