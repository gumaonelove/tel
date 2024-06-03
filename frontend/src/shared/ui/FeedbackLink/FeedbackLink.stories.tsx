import React, {memo} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {FeedbackLink} from './FeedbackLink';

export default {
    title: 'shared/FeedbackLink',
    component: FeedbackLink,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof FeedbackLink>;

const Template: ComponentStory<typeof FeedbackLink> = (args) => <FeedbackLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
