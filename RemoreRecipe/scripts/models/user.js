let servicer = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        localStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        localStorage.setItem('userId', userId);
        let username = userInfo.username;
        localStorage.setItem('username', username);
    }

    function login(username, password) {
        let userData = {
            username,
            password
        };
        return requester.post('user', 'login', 'basic', userData);
    }

    function register(username, password) {
        let userData = {
            username,
            password
        };
        return requester.post('user', '', 'basic', userData);
    }

    function logout() {
        let logoutData = {
            authtoken: localStorage.getItem('authtoken')
        };
        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        notify.showInfo(reason.response.data.error, "danger");
    }

    return {
        login,
        register,
        logout,
        saveSession,
        handleError
    }
})();
