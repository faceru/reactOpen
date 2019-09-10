import { DELETE_NEW, CREATE_NEW, UPDATE_NEW, RECEIVE_NEWS } from '../constants';

const initialState = [
    
];

const news = (state = initialState, { id, h1, h2, description, preview, detail, content, type, news}) => {
  switch (type) {
    case RECEIVE_NEWS:
      return news
    case DELETE_NEW :
      return [
        ...state.filter(item => (item.id !== id))
      ];
    case CREATE_NEW:
      return [
        ...state,{
            id,
            h1,
            h2,
            description,
            preview,
            detail,
            content,
        }
      ];
    case UPDATE_NEW:
        return [...state].map( newsItem => {
            if (newsItem.id === id){
                newsItem.h1 = h1;
                newsItem.h2 = h2;
                newsItem.description = description;
                newsItem.preview = preview;
                newsItem.detail = detail;
                newsItem.content = content;
            }
            return newsItem;
        })
    default:
      return state;
  }
}

export default news;