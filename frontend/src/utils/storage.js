const STORAGE_KEY = "codelens-history";

export const saveHistory = (history) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(history)
    );
};

export const loadHistory = () => {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
};

export const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
};