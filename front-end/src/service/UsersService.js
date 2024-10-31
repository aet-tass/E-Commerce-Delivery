import axios from "axios";

class UsersService {
    static BASE_URL = "http://localhost:1010";
    static async login(email, password) {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/login`, {
                email,
                password
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async register(userData, token) 
    {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/register`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getAllUsers(token) {
        try {
            const response = await axios.get(`${this.BASE_URL}/admin/get-all-users`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getProfile(token) {
        try {
            const response = await axios.get(`${this.BASE_URL}/adminusers/get-profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getUserById(userId, token) { 
        try {
            const response = await axios.get(`${this.BASE_URL}/admin/get-user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async updateUser(userId, userData, token) {
        try {
            const response = await axios.put(`${this.BASE_URL}/admin/update/${userId}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async deleteUser(userId, token) {
        try {
            const response = await axios.delete(`${this.BASE_URL}/admin/delete/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    static isAuthenticated() {
        const token = localStorage.getItem("token");
        return token ? true : false;
    }

    static isAdmin() {
        const role = localStorage.getItem("role");
        return role === "ADMIN" ? true : false;
    }

    static isUser() {
        const role = localStorage.getItem("role");
        return role === "USER" ? true : false;
    }

    static adminOnly() {
        return this.isAuthenticated() && this.isAdmin();
    }
}

export default UsersService;