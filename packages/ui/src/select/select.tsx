import { ChangeEvent, PropsWithChildren } from "react";

type SelectProps = {
	name: string;
	label?: string;
	required?: boolean;
	placeholder?: string;
	error?: string;
	onChange?: (event: ChangeEvent) => void;
};

type SelectOptionProps = {};

export function Select(props: PropsWithChildren<SelectProps>) {
	const { name, label, required, error, children: options, onChange } = props;

	return (
		<div className="form-control w-full">
			<label className="label">
				<span className={`label-text ${error ? "text-error" : ""}`}>
					{label} {required && <span className="text-error">*</span>}
				</span>
			</label>
			<select
				name={name}
				className="select-bordered select"
				onChange={onChange}
			>
				{options}
			</select>
			<label className="label">
				<span className="label-text-alt text-error">{error}</span>
			</label>
		</div>
	);
}

export function SelectOption(props: PropsWithChildren<SelectOptionProps>) {
	const { children: optionLabel } = props;
	return <option>{optionLabel}</option>;
}
