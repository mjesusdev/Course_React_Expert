import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () => {
    test('should return url of image', async() => {
        const url = await getImagen();

        expect( url.includes('https://') ).toBe( true );
    })
})
