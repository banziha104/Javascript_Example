# HOC

> 리액트 컴포넌트를 작성하게 될 때 반복될 수 있는 코드들을 HOC로 만들어줌, 주로 with을 접두어로 붙임 <br>
> 파라미터로 컴포넌트를 받아오고, 함수 내부에 새컴포넌트를 만든 다음에 해당 컴포넌트 안에서 받아온 컴포넌트를 랜더링


1. 반복되는 컴포넌트 발견하기

```javascript
import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    data: null
  }
  
  async initialize() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();  
  }


  render() {
    const { data } = this.state;
    
    if (!data) return null;

    return (
      <div>
        { JSON.stringify(data) }    
      </div>
    );
  }
}


export default Post;
```

2. HOC 작성

```javascript
import React, { Component } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponen) => {
  return class extends Component {

    state = {
      data: null
    }

    async initialize() {
      try {
        const response = await axios.get(url);
        this.setState({
          data: response.data
        });
      } catch (e) {
        console.log(e);
      }
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      const { data } = this.state;
      return (
        <WrappedComponent {...this.props} data={data}/>
      )
    }
  }
}

export default withRequest;
```

3. 사용하기

```javascript
import React, { Component } from 'react';
import withRequest from './withRequest';

class Comments extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}


export default withRequest('https://jsonplaceholder.typicode.com/comments?postId=1')(Comments);
```