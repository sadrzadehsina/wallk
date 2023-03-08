import { Field } from "formik";
import { TextArea } from "ui";

type ControlledTextAreaProps = {
	name: string;
	label?: string;
	required?: boolean;
};

export function ControlledTextArea(props: ControlledTextAreaProps) {
	const { name, label, required } = props;

	return (
		<Field name={name}>
			{({ field, form: { touched, errors }, meta }) => {
				return (
					<TextArea
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
