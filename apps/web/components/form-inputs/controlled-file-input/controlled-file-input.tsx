import { Field } from "formik";
import { FileInput } from "ui";

type ControlledFileInputProps = {
	name: string;
	label?: string;
	required?: boolean;
};

export function ControlledFileInput(props: ControlledFileInputProps) {
	const { name, label, required } = props;

	return (
		<Field name={name}>
			{({ field, form: { touched, errors }, meta }) => {
				return (
					<FileInput
						label={label}
						required={required}
						error={meta.touched && meta.error}
						{...field}
					/>
				);
			}}
		</Field>
	);
}
