import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./input";

export default {
	title: "Components/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	required: true,
	label: "Username",
};
