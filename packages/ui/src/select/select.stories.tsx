import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select, SelectOption } from "./select";

export default {
	title: "Components/Select",
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
	return (
		<Select {...args}>
			<SelectOption>option 1</SelectOption>
			<SelectOption>option 2</SelectOption>
			<SelectOption>option 3</SelectOption>
			<SelectOption>option 4</SelectOption>
		</Select>
	);
};

export const Default = Template.bind({});
Default.args = {
	required: true,
	label: "Category",
};
