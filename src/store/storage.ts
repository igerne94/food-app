export function loadState<T>(key: string): T | undefined {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function saveState<T>(key: string, state: T) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    }
    catch (error) {
        console.error(error);
    }
}
