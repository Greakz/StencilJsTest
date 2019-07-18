export interface MyEntity {
    code: string
}

export function fetchData(): MyEntity {
    return {
        code: 'moin',
    }
}