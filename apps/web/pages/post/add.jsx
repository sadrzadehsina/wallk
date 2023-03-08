import { Stepper } from "ui";

export default function PostAdd() {
	return (
		<Stepper.Container active={1}>
			<Stepper.Buttons>
				<Stepper.Button value={1}>Step 1</Stepper.Button>
				<Stepper.Button value={2}>Step 2</Stepper.Button>
				<Stepper.Button value={3}>Step 3</Stepper.Button>
			</Stepper.Buttons>
			<Stepper.Contents>
				<Stepper.Content value={1}>Step 1 Content</Stepper.Content>
				<Stepper.Content value={2}>Step 2 Content</Stepper.Content>
				<Stepper.Content value={3}>Step 3 Content</Stepper.Content>
			</Stepper.Contents>
		</Stepper.Container>
	);
}
