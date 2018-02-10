# axios

> Http 통신 모듈, Promise 기반 

```javascript
axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`
        ).then(
           (response) => {
               dispatch({
                   type : GET_POST_SUCCESS,
                   payload : response
               })
           }
        ).catch(error =>{
          dispatch({
              type: GET_POST_FAILURE,
              payload: error
          }) ;
          throw (error);
        });
```