function resolveServer(service) {
    if (service==='tickets') return 'http://localhost:49817';
    if (service==='reviews') return 'http://localhost:49843';
    return null;
}
export const loginUser = (service) => `${resolveServer(service)}/Profile/login`;
export const logoutUser = (service) => `${resolveServer(service)}/Profile/logout`;
export const getUser = (service) => `${resolveServer(service)}/Profile`;
export const registerUser = (service) => `${resolveServer(service)}/Profile`;