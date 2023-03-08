import { Field } from "formik";
import { Input } from "ui";

type ControlledInputProps = {
	name: string;
	label?: string;
	required?: boolean;
};

export function ControlledInput(props: ControlledInputProps) {
	const { name, label, required } = props;

	return (
		<Field name={name}>
			{({ field, form: { touched, errors }, meta }) => {
				return (
					<Input
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
