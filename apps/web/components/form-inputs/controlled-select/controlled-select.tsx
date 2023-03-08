import { PropsWithChildren } from "react";
import { Field } from "formik";
import { Select } from "ui";

type ControlledSelectProps = {
	name: string;
	label?: string;
	required?: boolean;
};

export function ControlledSelect(
	props: PropsWithChildren<ControlledSelectProps>
) {
	const { children, name, label, required } = props;

	return (
		<Field name={name}>
			{({ field, form: { touched, errors }, meta }) => {
				return (
					<Select.Container
						label={label}
						required={required}
						error={meta.touched && meta.error}
						{...field}
					>
						{children}
					</Select.Container>
				);
			}}
		</Field>
	);
}
