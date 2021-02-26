export default [
    {
        url: '/api/users',
        method: 'post',
        response: ({ body }) => {
            console.log('body>>>>>>>>', body);
            return {
                code: 20000,
                message: 'ok',
                data: ['tom','jerry'],
            };
        },
    },
];