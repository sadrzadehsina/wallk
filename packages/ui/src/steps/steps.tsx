import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

type StepperContextProps = {
	current: number;
	change: (index: number) => void;
};

type StepperProps = {
	active: number;
};

type StepButtonProps = {
	value: number;
};

type StepContentProps = {
	value: number;
};

const StepperContext = createContext<StepperContextProps>({
	current: 0,
	change: () => undefined,
});

export function Stepper(props: PropsWithChildren<StepperProps>) {
	const { children, active } = props;

	const [current, setCurrent] = useState(active);

	const change = useCallback(
		(index: number) => setCurrent(index),
		[setCurrent]
	);

	const state = useMemo(() => ({ current, change }), [current, change]);

	return (
		<StepperContext.Provider value={state}>{children}</StepperContext.Provider>
	);
}

export function StepButtons(props: PropsWithChildren<{}>) {
	const { children } = props;
	return <ul className="steps">{children}</ul>;
}

export function StepButton(props: PropsWithChildren<StepButtonProps>) {
	const { children, value } = props;

	const { current, change } = useContext(StepperContext);

	return (
		<li className="step" data-content={value < current ? "✓" : value}>
			<button type="button" onClick={() => change(value)}>
				{children}
			</button>
		</li>
	);
}

export function StepContents(props: PropsWithChildren<{}>) {
	const { children } = props;
	return <div>{children}</div>;
}

export function StepContent(props: PropsWithChildren<StepContentProps>) {
	const { children, value } = props;

	const { current } = useContext(StepperContext);

	return <div className={value !== current ? "hidden" : ""}>{children}</div>;
}
