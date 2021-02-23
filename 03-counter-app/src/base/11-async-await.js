// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {
    try {
        const apiKey = 'Zkcx3vStXY7FydFYY3qaxkeoPCZeHrPB';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return url;
/*         const img = document.createElement('img');
        img.src = url;
        document.body.append( img ); */
    } catch (error) {
        // manejo del error
        /* console.error(error) */
        return 'No existe';
    }
}

/* getImagen(); */