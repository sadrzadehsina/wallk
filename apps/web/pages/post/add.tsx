import { Stepper, Select } from "ui";
import { Form, Formik } from "formik";
import { ControlledInput } from "../../components/form-inputs/controlled-input";
import { ControlledSelect } from "../../components/form-inputs/controlled-select";
import { ControlledTextArea } from "../../components/form-inputs/controlled-text-area";

export default function PostAdd() {
	return (
		<Stepper.Container active={1}>
			<Stepper.Buttons>
				<Stepper.Button value={1}>Step 1</Stepper.Button>
				<Stepper.Button value={2}>Step 2</Stepper.Button>
				<Stepper.Button value={3}>Step 3</Stepper.Button>
			</Stepper.Buttons>
			<Stepper.Contents>
				<Stepper.Content value={1}>
					<Formik initialValues={{ title: "" }}>
						{(props) => (
							<Form>
								<div className="grid grid-cols-2 gap-x-20 gap-y-5">
									<ControlledInput
										name="title"
										label="Title"
										required
										placeholder="Type post title"
									/>
									<ControlledSelect name="category" label="Category" required>
										<Select.Option>Category 1</Select.Option>
										<Select.Option>Category 2</Select.Option>
										<Select.Option>Category 3</Select.Option>
									</ControlledSelect>
									<ControlledTextArea
										name="short-decription"
										label="Short Description"
									/>
									<ControlledTextArea name="decription" label="Description" />
								</div>
							</Form>
						)}
					</Formik>
				</Stepper.Content>
				<Stepper.Content value={2}>Step 2 Content</Stepper.Content>
				<Stepper.Content value={3}>Step 3 Content</Stepper.Content>
			</Stepper.Contents>
		</Stepper.Container>
	);
}
