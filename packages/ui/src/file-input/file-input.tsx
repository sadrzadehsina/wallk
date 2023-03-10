import { ChangeEvent } from "react";

type FileInputProps = {
	label?: string;
	required?: boolean;
	error?: string;
	onChange?: (event: ChangeEvent) => void;
	name: string;
};

export function FileInput(props: FileInputProps) {
	const { label, required, error, onChange, name } = props;

	return (
		<div className="form-control w-full">
			<label className="label">
				<span className={`label-text ${error ? "text-error" : ""}`}>
					{label} {required && <span className="text-error">*</span>}
				</span>
			</label>
			<input
				name={name}
				type="file"
				className={`file-input-bordered file-input w-full  ${
					error ? "input-error" : ""
				}`}
				onChange={onChange}
			/>
			<label className="label">
				<span className="label-text-alt text-error">{error}</span>
			</label>
		</div>
	);
}
