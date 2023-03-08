import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from ".";

export default {
	title: "Components/Select",
	component: Select.Container,
} as ComponentMeta<typeof Select.Container>;

const Template: ComponentStory<typeof Select.Container> = (args) => {
	return (
		<Select.Container {...args}>
			<Select.Option>option 1</Select.Option>
			<Select.Option>option 2</Select.Option>
			<Select.Option>option 3</Select.Option>
			<Select.Option>option 4</Select.Option>
		</Select.Container>
	);
};

export const Default = Template.bind({});
Default.args = {
	required: true,
	label: "Category",
};
