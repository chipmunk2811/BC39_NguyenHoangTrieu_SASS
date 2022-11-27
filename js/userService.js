
function UserService() {
    this.getListUserAPI = function () {
        return axios({
            url: "https://637b69a46f4024eac20ce266.mockapi.io/api/ourteach",
            method: "GET",
        });
    };

    this.addUserAPI = function (user) {
        return axios({
            url: "https://637b69a46f4024eac20ce266.mockapi.io/api/ourteach",
            method: "POST",
            data: user,
        });
    };

    this.deleteListUserAPI = function (id) {
        return axios({
            url: `https://637b69a46f4024eac20ce266.mockapi.io/api/ourteach/${id}`,
            method: "DELETE",
        });
    };

    this.getIDListUserAPI = function (id) {
        return axios({
            url: `https://637b69a46f4024eac20ce266.mockapi.io/api/ourteach/${id}`,
            method: "GET",
        });
    };

    this.updateUserAPI = function (user) {
        return axios({
          url: `https://637b69a46f4024eac20ce266.mockapi.io/api/ourteach/${user.id}`,
          method: "PUT",
          data: user,
        });
      };

};