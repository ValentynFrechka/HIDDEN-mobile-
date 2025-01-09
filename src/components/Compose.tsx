interface ComponentWithProps {
    component: React.JSXElementConstructor<React.PropsWithChildren<any>>;
    props?: Record<string, any>;
}

interface Props {
    components: Array<ComponentWithProps | React.JSXElementConstructor<React.PropsWithChildren<any>>>;
    children: React.ReactNode;
}

/**
 * JSX Component for composing multiple components with optional props.
 * Allows passing components as an array of objects containing the component and its props.
 *
 * @param {Props} props
 * @param {Array<ComponentWithProps | React.JSXElementConstructor<React.PropsWithChildren<any>>>} props.components - 
 * Array of components and props.
 * Each item in the array can be either:
 * - A React component (e.g., a context provider or higher-order component).
 * - An object with:
 *   - `component`: The React component.
 *   - `props?`: Optional props to pass to the component.
 * @param {React.ReactNode} children - The child components to be wrapped.
 *
 * @example
 * Usage:
 * ```tsx
 * <Compose
 *   components={[
 *     { component: TransactionFormValuesContext.Provider, props: { value: transactionFormContextValue } },
 *     { component: TransactionViewContext.Provider, props: { value: transactionViewContextValue } },
 *   ]}
 * >
 *   <App />
 * </Compose>
 * ```
 * 
 * @returns {React.ReactNode} The wrapped child components.
 */
export default function Compose({ components = [], children }: Props) {
    return components.reduceRight((acc, comp) => {
        if (typeof comp === 'function') {
            // If the component is passed as a function without props
            const Component = comp;
            return <Component>{acc}</Component>;
        } else {
            // If the component is passed with props
            const { component: Component, props = {} } = comp;
            return <Component {...props}>{acc}</Component>;
        }
    }, children);
}