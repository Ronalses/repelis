const URL = 'https://api-repelis.herokuapp.com/api'

async function getStrenos() {
    const urlStrenos = URL + '/bestPremiereMovies'
    try {
        let response = await fetch(urlStrenos)
        let responseJson = await response.json()
        console.log(responseJson)
        return responseJson.info
    }
    catch (error) {
        return error
    }
}

async function getCategories() {
    const urlStrenos = URL + '/getCategories'
    try {
        let response = await fetch(urlStrenos)
        let responseJson = await response.json()
        return responseJson
    }
    catch (error) {
        return error
    }
}

async function getDestacadas() {
    const urlStrenos = URL + '/bestMovies'
    try {
        let response = await fetch(urlStrenos)
        let responseJson = await response.json()
        console.log(responseJson)
        return responseJson.info
    }
    catch (error) {
        return error
    }
}

// the params: categorie+number or number for all movies
async function getAll(numberPage) {
    let urlStrenos = URL + '/getAllMovies'

    if (numberPage) urlStrenos = urlStrenos + '/' + numberPage
    
    try {
        let response = await fetch(urlStrenos)
        let responseJson = await response.json()
        return responseJson
    }
    catch (error) {
        return error
    }
}

async function getCategorie(categorie, numberPage) {

    categorie = formatString(categorie)
    let urlCategorie = URL + '/moviesForCategories/' + categorie

    if (numberPage) urlCategorie = urlCategorie + '/' + numberPage

    try {
        let response = await fetch(urlCategorie)
        let responseJson = await response.json()
        return responseJson
    }
    catch (error) {
        return error
    }
}

function formatString(string) {
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

    // Lo queremos devolver limpio en minusculas
    string = string.toLowerCase();

    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    string = string.replace(/ /g, "-");

    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    string = string.replace(/á/gi, "a");
    string = string.replace(/é/gi, "e");
    string = string.replace(/í/gi, "i");
    string = string.replace(/ó/gi, "o");
    string = string.replace(/ú/gi, "u");
    string = string.replace(/ñ/gi, "n");
    return string;
}
export { getStrenos, getDestacadas, getAll, getCategorie, getCategories }