export const TICKETS_USER_DELETE = 'tickets_user_delete';
export const TICKETS_USER_ADD = 'tickets_user_add';
export const REVIEWS_USER_DELETE = 'reviews_user_delete';
export const REVIEWS_USER_ADD = 'reviews_user_add';

export const tickets_add = user => {
  return {
    type: TICKETS_USER_ADD,
    payload: user
  };
};

export const tickets_del = () => {
  return {
    type: TICKETS_USER_DELETE
  };
};

export const reviews_add = user => {
  return {
    type: REVIEWS_USER_ADD,
    payload: user
  };
};

export const reviews_del = () => {
  return {
    type: REVIEWS_USER_DELETE
  };
};