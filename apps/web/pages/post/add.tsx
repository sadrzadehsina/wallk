import { Select } from "ui";
import { ControlledInput } from "../../components/form-inputs/controlled-input";
import { ControlledSelect } from "../../components/form-inputs/controlled-select";
import { ControlledTextArea } from "../../components/form-inputs/controlled-text-area";
import { ControlledFileInput } from "../../components/form-inputs/controlled-file-input";

import { Wizard, WizardStep } from "../../components/wizard";

export default function PostAdd() {
	return (
		<>
			<Wizard
				initialValues={{
					title: "",
					category: "",
					shortDecription: "",
					description: "",
				}}
			>
				<WizardStep title="Upload Images">
					<ControlledFileInput name="image-1" label="Image 1" required />
					<ControlledFileInput name="image-2" label="Image 2" required />
					<ControlledFileInput name="image-3" label="Image 3" required />
					<ControlledFileInput name="image-4" label="Image 4" required />
					<ControlledFileInput name="image-5" label="Image 5" required />
				</WizardStep>
				<WizardStep title="Fill Post Data">
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
			</Wizard>
		</>
	);
}
