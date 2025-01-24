export function unwrap<T>(value: T | undefined, ifNullDefaultReturn: T): T {
    if (!value) return ifNullDefaultReturn;
    return value;
}