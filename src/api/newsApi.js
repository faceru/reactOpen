import axios from 'axios'
let payload = {
    token: "Q8r6b5T0xRTSelKIZsbJPQ",
    data: {
        id:"numberInt",
      h1: "nameFirst",
      h2: "internetEmail",
      description: "phoneHome",
      preview:"internetEmail",
      detail:"internetEmail",
      content:"internetEmail",
      _repeat: 3
    }
};
export const Api = () => (
    axios({
        method: "post",
        url: "https://app.fakejson.com/q",
        data: payload
      }).then(response => response.data)
)