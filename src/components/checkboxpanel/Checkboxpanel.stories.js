import React from "react";
import Checkboxpanel from "./Checkboxpanel";
const optionList = [
    {
        id: 1,
        label: "Ferrari",
        active: false
    },
    {
        id: 2,
        label: "BMW",
        active: false
    },
    {
        id: 3,
        label: "Porshe",
        active: false
    },
    {
        id: 4,
        label: "Mercedes",
        active: false
    }
];

export default {
    component: Checkboxpanel,
    title: "SNC/Checkboxpanel",
};

const Template = (args) => <Checkboxpanel optionlist={optionList} {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkboxpanel: {
        title: "Checkbox Panel",
        state: "CHECKBOX_PANEL",
        optionlist: optionList,
    },
};


export const WithFilter = Template.bind({});
    WithFilter.args = {
    filter: true,
    optionlist: optionList,
    title: "Filter Checkbox"
};
