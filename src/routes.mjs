import { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } from './handler.mjs'

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,


    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,

    },

    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

export default routes;
