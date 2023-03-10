import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileInput } from "./file-input";

export default {
	title: "Components/FileInput",
	component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
	<FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
	required: true,
	label: "Upload Image",
};
