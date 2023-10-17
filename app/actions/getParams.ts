export async function getParams(): Promise<Roots>{
    return fetch('https://run.mocky.io/v3/cbd28ba6-f6b0-40ac-8e5c-fd0ca955cd60').then(res => res.json())
}