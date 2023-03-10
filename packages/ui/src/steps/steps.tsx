import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

type StepperContextProps = {
	current: number;
	change: (index: number) => void;
	disableButtons?: boolean;
};

type StepperProps = {
	active: number;
	disableButtons?: boolean;
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
	const { children, active, disableButtons } = props;

	const [current, setCurrent] = useState(active);

	const change = useCallback(
		(index: number) => setCurrent(index),
		[setCurrent]
	);

	const state = useMemo(
		() => ({ current, change, disableButtons }),
		[current, change]
	);

	useEffect(() => change(active), [active]);

	return (
		<StepperContext.Provider value={state}>{children}</StepperContext.Provider>
	);
}

export function StepButtons(props: PropsWithChildren<{}>) {
	const { children } = props;
	return <ul className="steps w-full">{children}</ul>;
}

export function StepButton(props: PropsWithChildren<StepButtonProps>) {
	const { children, value } = props;

	const { current, change, disableButtons } = useContext(StepperContext);

	return (
		<li
			className={["step", value <= current && "step-success"]
				.filter(Boolean)
				.join(" ")}
			data-content={value < current ? "✓" : value}
		>
			{disableButtons ? (
				<span>{children}</span>
			) : (
				<button type="button" onClick={() => change(value)}>
					{children}
				</button>
			)}
		</li>
	);
}

export function StepContents(props: PropsWithChildren<{}>) {
	const { children } = props;
	return <div className="py-12">{children}</div>;
}

export function StepContent(props: PropsWithChildren<StepContentProps>) {
	const { children, value } = props;

	const { current } = useContext(StepperContext);

	return <div className={value !== current ? "hidden" : ""}>{children}</div>;
}
