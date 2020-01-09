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