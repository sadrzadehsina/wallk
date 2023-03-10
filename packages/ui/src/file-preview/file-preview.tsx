import { useMemo } from "react";

interface File extends Blob {
	readonly lastModified: number;
	readonly name: string;
}

type FilePreviewProps = {
	file: File;
};

export function FilePreview(props: FilePreviewProps) {
	const { file } = props;

	const src = useMemo(() => {
		if (!file) return "";
		return URL.createObjectURL(file);
	}, [file]);

	return (
		<div>
			<img src={src} />
		</div>
	);
}
