export const fetchNotes = () => (
    $.ajax({
        method: "GET",
        url: "/api/notes"
    })
)

export const fetchNote = (noteId) => (
    $.ajax({
        method: "GET",
        url: `/api/notes/${noteId}`
    })
)

export const createNote = (note) => (
    $.ajax({
        method: "POST",
        url: "/api/notes",
        data: {note}
    })
)

export const updateNote = (note) => (
    $.ajax({
        method: "PATCH",
        url: `/api/notes/${note.id}`,
        data: {note}
    })
)

export const deleteNote = (noteId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/notes/${noteId}`
    })
)