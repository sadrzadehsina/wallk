import { Formik, Form } from "formik";
import { Children, PropsWithChildren, useMemo, useState } from "react";
import { Stepper } from "ui";

type WizardProps = {
	initialValues: any;
	onSubmit: (values: any) => void;
};

export function Wizard(props: PropsWithChildren<WizardProps>) {
	const { children, initialValues, onSubmit } = props;

	const [stepNumber, setStepNumber] = useState(0);
	const steps = Children.toArray(children);
	const [snapshot, setSnapshot] = useState(initialValues);

	const step = steps[stepNumber];
	const totalSteps = steps.length;
	const isLastStep = stepNumber === totalSteps - 1;

	const next = (values) => {
		setSnapshot(values);
		setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
	};

	const previous = (values) => {
		setSnapshot(values);
		setStepNumber(Math.max(stepNumber - 1, 0));
	};

	const handleSubmit = async (values, fns) => {
		if (step.props.onSubmit) {
			await step.props.onSubmit(values);
		}
		if (isLastStep) {
			return onSubmit(values);
		} else {
			next(values);
		}
	};

	return (
		<Formik initialValues={snapshot} onSubmit={handleSubmit}>
			{(formik) => (
				<Form>
					<Stepper.Container active={stepNumber + 1} disableButtons>
						<Stepper.Buttons>
							{Array(totalSteps)
								.fill(1)
								.map((s, i) => (
									<Stepper.Button value={i + 1}>Step {i + 1}</Stepper.Button>
								))}
						</Stepper.Buttons>
						<Stepper.Contents>
							{steps.map((s, i) => (
								<Stepper.Content value={i + 1}>{step}</Stepper.Content>
							))}
						</Stepper.Contents>
					</Stepper.Container>
					<div className="flex">
						{stepNumber > 0 && (
							<button onClick={() => previous(formik.values)} type="button">
								Back
							</button>
						)}
						<div>
							<button disabled={formik.isSubmitting} type="submit">
								{isLastStep ? "Submit" : "Next"}
							</button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export function WizardStep(props: PropsWithChildren<{}>) {
	return <>{props.children}</>;
}
