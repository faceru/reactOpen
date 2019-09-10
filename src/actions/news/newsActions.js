import { DELETE_NEW, CREATE_NEW, UPDATE_NEW, FETCH_NEWS, RECEIVE_NEWS } from '../../constants';

export const deleteNew = (id) => ({
  type: DELETE_NEW,
  id,
});
export const createNew = (id, h1, h2, description, preview, detail, content) => ({
    type: CREATE_NEW,
    id,
    h1,
    h2,
    description,
    preview,
    detail,
    content,

});
export const updateNew = (id, h1, h2, description, preview, detail, content) => ({
    type: UPDATE_NEW,
    id,
    h1,
    h2,
    description,
    preview,
    detail,
    content,

});
export const fetchNews = () => ({type:FETCH_NEWS});
export const receiveNews = news => ({type:RECEIVE_NEWS, news})