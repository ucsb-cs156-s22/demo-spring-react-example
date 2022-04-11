
import React from 'react';
import AppNavbar from "main/components/Nav/AppNavbar";
import { currentUserFixtures } from "fixtures/currentUserFixtures"

export default {
    title: 'components/Nav/AppNavbar',
    component: AppNavbar
};


const Template = (args) => {
    return (
        <AppNavbar {...args} />
    )
};

export const localhost3000 = Template.bind({});
localhost3000.args = {
    currentUrl: "http://localhost:3000",
    systemInfo: { activeProfile: "production" }
};

export const localhostNumeric3000 = Template.bind({});
localhostNumeric3000.args = {
    currentUrl: "http://127.0.0.1:3000",
    systemInfo: { activeProfile: "production" }

};

export const localhost8080 = Template.bind({});
localhost8080.args = {
    currentUrl: "http://localhost:8080",
    systemInfo: { activeProfile: "production" }
};

export const productionLoggedOut = Template.bind({});
productionLoggedOut.args = {
    systemInfo: { activeProfile: "production" }
};

export const e2eTestsLoggedOut = Template.bind({});
e2eTestsLoggedOut.args = {
    systemInfo: { activeProfile: "e2etests" }
};

export const productionLoggedIn = Template.bind({});
productionLoggedIn.args = {
    systemInfo: { activeProfile: "production" },
    currentUser: currentUserFixtures.adminUser
};

export const e2eTestsLoggedIn = Template.bind({});
e2eTestsLoggedIn.args = {
    systemInfo: { activeProfile: "e2etests" },
    currentUser: currentUserFixtures.adminUser
};


