import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./text-area";

export default {
	title: "Components/TextArea",
	component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
	<TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
	required: true,
	label: "Biography",
};
