import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from 'widgets/Footer';

export default {
    title: 'widget/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
