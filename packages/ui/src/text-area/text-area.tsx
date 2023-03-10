import { ChangeEvent } from "react";

type TextAreaProps = {
	label?: string;
	required?: boolean;
	placeholder?: string;
	error?: string;
	onChange?: (event: ChangeEvent) => void;
	name: string;
};

export function TextArea(props: TextAreaProps) {
	const { label, required, placeholder, error, onChange, name } = props;

	return (
		<div className="form-control w-full">
			<label className="label">
				<span className={`label-text ${error ? "text-error" : ""}`}>
					{label} {required && <span className="text-error">*</span>}
				</span>
			</label>
			<textarea
				name={name}
				placeholder={placeholder}
				className={`textarea-bordered textarea h-32 ${
					error ? "input-error" : ""
				}`}
				onChange={onChange}
			></textarea>
			<label className="label">
				<span className="label-text-alt text-error">{error}</span>
			</label>
		</div>
	);
}
