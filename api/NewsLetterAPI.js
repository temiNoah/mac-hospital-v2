

function NewsLetterAPI() {

    const BASE_URL = 'newsLetter/';

    const createNewsLetter = async (form) => {
        const url = base_path + 'create';
        const response = await axiosPrivate().post(url, { ...payload }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }

    const getAllNewsLetters = async () => {

        const url = path + 'all-news-letter';
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response;
    }

    const getNewsLetterById = async (id) => {
        const url = path + id;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response;
    }

    const getLastestNewsLetter = async () => {
        const url = path + 'lastest-news-Letter';
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response;
    }


    return {
        createNewsLetter,
        getAllNewsLetters,
        getNewsLetterById,
        getLastestNewsLetter
    }
}
export default NewsLetterAPI