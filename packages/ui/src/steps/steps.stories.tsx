import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stepper } from ".";

export default {
	title: "Components/Steps",
	component: Stepper.Container,
} as ComponentMeta<typeof Stepper.Container>;

const Template: ComponentStory<typeof Stepper.Container> = (args) => {
	return (
		<Stepper.Container {...args}>
			<Stepper.Buttons>
				<Stepper.Button value={1}>Step1</Stepper.Button>
				<Stepper.Button value={2}>Step2</Stepper.Button>
				<Stepper.Button value={3}>Step3</Stepper.Button>
				<Stepper.Button value={4}>Step4</Stepper.Button>
			</Stepper.Buttons>
			<Stepper.Contents>
				<Stepper.Content value={1}>Step1 Content</Stepper.Content>
				<Stepper.Content value={2}>Step2 Content</Stepper.Content>
				<Stepper.Content value={3}>Step3 Content</Stepper.Content>
				<Stepper.Content value={4}>Step4 Content</Stepper.Content>
			</Stepper.Contents>
		</Stepper.Container>
	);
};

export const Default = Template.bind({});
Default.args = { active: 3 };
