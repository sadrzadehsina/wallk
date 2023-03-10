import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { FilePreview } from "./file-preview";

export default {
	title: "Components/File Preview",
	component: FilePreview,
} as ComponentMeta<typeof FilePreview>;

const Template: ComponentStory<typeof FilePreview> = (args) => {
	const [file, setFile] = useState(null);
	return (
		<>
		<FilePreview file={file} />
			<input type="file" onChange={event => setFile(event.target.files[0])} />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};
