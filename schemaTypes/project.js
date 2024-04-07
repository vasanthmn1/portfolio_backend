export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],

        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'frontendGithubLink',
            title: 'FrontendGithubLink',
            type: 'string',
        },
        {
            name: 'backendGithubLink',
            title: 'BackendWebsiteLink',
            type: 'string',
        },
        {
            name: 'userCredentialEmail',
            title: 'UserCredentialsEmail',
            type: 'string',
        },
        {
            name: 'userCredentialPassword',
            title: 'YserCredentialPassword',
            type: 'string',
        },
        {
            name: 'adminAccess',
            title: 'isTrueAdmin',
            type: 'boolean',
        },

    ]
}