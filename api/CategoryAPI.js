import { axiosPrivate } from "./axios";

function CategoryAPI() {

    // console.log("control came into category API !");

    const base_path = "category/";

    const createCategory = async (payload) => {
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

    const deleteCategory = async (categoryId) => {

        const url = path + `${categoryId}`;
        const response = await axiosPrivate().delete(url).catch(
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

    const updateCategory = async (category, categoryId) => {

        const url = path + categoryId;
        const response = await axiosPrivate().put(url, { ...category }).catch(
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

    const getAllCategory = async () => {

        const url = path + 'all-categories';
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
        return response

    }

    const getCategory = async (categoryId) => {
        const url = path + categoryId;
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
        return response
    }


    return {
        createCategory,
        deleteCategory,
        updateCategory,
        getAllCategory,
        getCategory
    }
}

export default CategoryAPI;