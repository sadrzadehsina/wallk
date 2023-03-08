type InputProps = {
	label?: string;
	required?: boolean;
	placeholder?: string;
	error?: string;
};

export function Input(props: InputProps) {
	const { label, required, placeholder, error } = props;

	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className={`label-text ${error ? "text-error" : ""}`}>
					{label} {required && <span className="text-error">*</span>}
				</span>
			</label>
			<input
				type="text"
				placeholder={placeholder}
				className={`input-bordered input w-full max-w-xs ${
					error ? "input-error" : ""
				}`}
			/>
			<label className="label">
				<span className="label-text-alt text-error">{error}</span>
			</label>
		</div>
	);
}