import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
	Stepper,
	StepButtons,
	StepButton,
	StepContents,
	StepContent,
} from "./steps";

export default {
	title: "Components/Steps",
	component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => {
	return (
		<Stepper {...args}>
			<StepButtons>
				<StepButton value={1}>Step1</StepButton>
				<StepButton value={2}>Step2</StepButton>
				<StepButton value={3}>Step3</StepButton>
				<StepButton value={4}>Step4</StepButton>
			</StepButtons>
			<StepContents>
				<StepContent value={1}>Step1 Content</StepContent>
				<StepContent value={2}>Step2 Content</StepContent>
				<StepContent value={3}>Step3 Content</StepContent>
				<StepContent value={4}>Step4 Content</StepContent>
			</StepContents>
		</Stepper>
	);
};

export const Default = Template.bind({});
Default.args = { active: 3 };
