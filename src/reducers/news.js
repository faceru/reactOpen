import { DELETE_NEW, CREATE_NEW, UPDATE_NEW } from '../constants';

const initialState = [
    {
        id:1,
        h1:'Привет',
        h2:'Мир',
        description:'123123',
        content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        detail:'name.jpg',
        preview: 'bigName.jpg'
    },
    {
        id:2,
        h1:'Привет1',
        h2:'Мир',
        description:'123123',
        content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        detail:'name.jpg',
        preview: 'bigName.jpg'
    },
    {
        id:3,
        h1:'Привет2',
        h2:'Мир',
        description:'123123',
        content:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        detail:'name.jpg',
        preview: 'bigName.jpg'
    },
];

const news = (state = initialState, { id, h1, h2, description, preview, detail, content, type }) => {
  switch (type) {
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