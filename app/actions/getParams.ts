export function getParams(): Promise<Params>{
    return fetch('https://run.mocky.io/v3/9f6b26af-e8d3-41c0-81ef-6036da373bc0').then(res => res.json())
}