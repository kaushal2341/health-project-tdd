export const getHeaders = () => {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
};

export const getHeadersForDocumentPost = () => {
    return {
        responseType: 'arraybuffer',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
};