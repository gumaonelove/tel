import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
};

export const TextSizeXXXS = Template.bind({});
TextSizeXXXS.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XXXS,
};

export const TextSizeXXS = Template.bind({});
TextSizeXXS.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XXS,
};

export const TextSizeXS = Template.bind({});
TextSizeXS.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XS,
};

export const TextSizeS = Template.bind({});
TextSizeS.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.S,
};

export const TextSizeXm = Template.bind({});
TextSizeXm.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XM,
};

export const TextSizeM = Template.bind({});
TextSizeM.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
};

export const TextSizeL = Template.bind({});
TextSizeL.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.L,
};

export const TextSizeXlx = Template.bind({});
TextSizeXlx.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XLX,
};

export const TextSizeXl = Template.bind({});
TextSizeXl.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XL,
};

export const TextSizeXxl = Template.bind({});
TextSizeXxl.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XXL,
};

export const TextSizeXxxl = Template.bind({});
TextSizeXxxl.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.XXXL,
};

export const TextWeightRegular = Template.bind({});
TextWeightRegular.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
    weight: TextWeight.REGULAR,
};

export const TextWeightMedium = Template.bind({});
TextWeightMedium.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
    weight: TextWeight.MEDIUM,
};

export const TextWeightSemibold = Template.bind({});
TextWeightSemibold.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
    weight: TextWeight.SEMIBOLD,
};

export const TextWeightBold = Template.bind({});
TextWeightBold.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
    weight: TextWeight.BOLD,
};

export const TextWeightExtrabold = Template.bind({});
TextWeightExtrabold.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    size: TextSize.M,
    weight: TextWeight.EXTRABOLD,
};
export const TextError = Template.bind({});
TextError.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    theme: TextTheme.ERROR,
};

export const TextBlue = Template.bind({});
TextBlue.args = {
    children: 'Loremu ipsum ipsum ipsum ipsum',
    theme: TextTheme.BLUE,
};
