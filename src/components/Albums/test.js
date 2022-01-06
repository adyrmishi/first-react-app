import { screen, within, act } from "@testing-library/react";
import Albums from '.'

describe('Albums', () => {
    const stubAlbums = [
        {title: 'Test1', year: 2020, albumCover: 'https://media.pitchfork.com/photos/60803e1ca9839ab376dedc3e/1:1/w_600/Little-Simz.jpg'},
        {title: 'Test2', year: 2019, albumCover: 'https://media.pitchfork.com/photos/60803e1ca9839ab376dedc3e/1:1/w_600/Little-Simz.jpg'} 
    ]
    const stubHandleAlbumSelect = jest.fn()

    beforeEach(() => {
        render(<Albums handleSelect={stubHandleAlbumSelect} />)
    })

    test('it renders albums', () => {
        const albums = screen.getByRole('div')
        expect(albums.textContent).toContain(stubAlbums[0].title)
    })

})