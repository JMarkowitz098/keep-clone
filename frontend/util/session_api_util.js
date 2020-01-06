export const createUser = ({ email, password }) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data:
        {
            user:
            {
                email: email,
                password: password
            }
        }
    });
}

export const login = ({ email, password }) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data:
        {
            user:
            {
                email: email,
                password: password
            }
        }
    });
}
export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",
    });
}