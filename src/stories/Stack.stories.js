import React from 'react';

import  Stack  from './Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes : {
    numberOfChildren: { type: 'number', defaultValue: 4 },
  }
  
};

const Template = ({numberOfChildren, ...args}) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map (n => (
            <div style={{
            width: "229px",
            height: "270px",
            borderRadius: "30px",
            backgroundColor: "#F9F6F6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
                {n + 1}
            </div>
        ))}

    </Stack>
)

export const Horizontal = Template.bind ({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
}
