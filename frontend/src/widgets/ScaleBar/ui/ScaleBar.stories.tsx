import React, {memo} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ScaleBar} from './ScaleBar';

export default {
    title: 'shared/ScaleBar',
    component: ScaleBar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ScaleBar>;

const Template: ComponentStory<typeof ScaleBar> = (args) => <ScaleBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
