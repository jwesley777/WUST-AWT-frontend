function resolveServer(service) {
    if (service==='tickets') return 'http://localhost:49817';
    if (service==='reviews') return 'http://localhost:49843';
    return null;
}
export const loginUser = (service) => `${resolveServer(service)}/Profile/login`;
export const logoutUser = (service) => `${resolveServer(service)}/Profile/logout`;
export const getUser = (service) => `${resolveServer(service)}/Profile`;
export const registerUser = (service) => `${resolveServer(service)}/Profile`;

export const ticketsGetTickets = `${resolveServer("tickets")}/tickets/my`;
export const ticketsGetFilms = `${resolveServer("tickets")}/films`;
export const ticketsGetSessions = (filmId) => `${resolveServer("tickets")}/films/${filmId}/sessions`;
export const ticketsGetSessionWithTickets = (sessionId) => `${resolveServer("tickets")}/sessions/${sessionId}`;
export const ticketsBuyTicket = `${resolveServer("tickets")}/sessions/buy`;

export const ticketsAdminGetTickets = `${resolveServer("tickets")}/admin/tickets`;
export const ticketsAdminGetTheaters = `${resolveServer("tickets")}/admin/theaters`;
export const ticketsAdminGetSessions = `${resolveServer("tickets")}/admin/sessions`;
export const ticketsAdminGetHalls = `${resolveServer("tickets")}/admin/halls`;
export const ticketsAdminGetFilms = `${resolveServer("tickets")}/admin/films`;
export const ticketsAdminGetUsers = `${resolveServer("tickets")}/admin/users`;

export const reviewsLinkToken = `${resolveServer("reviews")}/profile/link`;
export const reviewsGetFilms = `${resolveServer("reviews")}/films`;
export const reviewsGetReviews = (filmId,verified) => `${resolveServer("reviews")}/reviews?filmId=${filmId}&verifiedOnly=${verified}`;
export const reviewsPostReview = `${resolveServer("reviews")}/reviews`;

export const reviewsAdminGetFilms = `${resolveServer("reviews")}/admin/films`;
export const reviewsAdminGetUsers = `${resolveServer("reviews")}/admin/users`;