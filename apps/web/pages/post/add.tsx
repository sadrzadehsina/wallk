import { Stepper, Select } from "ui";
import { Form, Formik } from "formik";
import { ControlledInput } from "../../components/form-inputs/controlled-input";
import { ControlledSelect } from "../../components/form-inputs/controlled-select";
import { ControlledTextArea } from "../../components/form-inputs/controlled-text-area";

import { Wizard, WizardStep } from "../../components/wizard";

export default function PostAdd() {
	return (
		<Wizard
			initialValues={{
				title: "",
				category: "",
				shortDecription: "",
				description: "",
			}}
		>
			<WizardStep>
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
						name="shortDecription"
						label="Short Description"
					/>
					<ControlledTextArea name="decription" label="Description" />
				</div>
			</WizardStep>
			<WizardStep>
				<div className="grid grid-cols-2 gap-x-20 gap-y-5">
					<ControlledInput
						name="title"
						label="Title"
						required
						placeholder="Type post title"
					/>
				</div>
			</WizardStep>
		</Wizard>
	);
}
