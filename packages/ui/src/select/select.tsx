import { PropsWithChildren } from "react";

type SelectProps = {
	label?: string;
	required?: boolean;
	placeholder?: string;
	error?: string;
};

type SelectOptionProps = {};

export function Select(props: PropsWithChildren<SelectProps>) {
	const { label, required, placeholder, error, children: options } = props;

	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className={`label-text ${error ? "text-error" : ""}`}>
					{label} {required && <span className="text-error">*</span>}
				</span>
			</label>
			<select className="select-bordered select">{options}</select>
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
