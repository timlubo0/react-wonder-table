import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";

export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const MyTable = Template.bind({});

const columns = [
    {
        text: 'Name',
        dataField: 'name',
    }
  ];
  
const data = [
    {
      id: 1,
      name: 'Tim Lubo'
    },
    {
      id: 2,
      name: 'Timmy Lubo'
    },
];

const actions = {
    route: 'action_url',
};

const pagination = {
    page: 1,
    sizePerPageList: [
        {text: '1', value: 1},
        {text: '2', value: 2},
    ]
}

const select = {
    selected: []
}

MyTable.args = {
    columns: columns,
    data: data,
    actions: actions,
    pagination: pagination,
    select: select
};