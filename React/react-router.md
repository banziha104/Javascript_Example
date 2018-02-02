# 리액트 라우터

> 프론트엔드 단에서 라우팅 하기 위한 기술


1. 라우팅하기
    
```javascript
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, About} from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

export default App;

```

2. 라우트 파라미터 읽기

- history : push, replace를 통해 이동하거나 앞 뒤 페이지 전환 
- location : 현경로와 url 쿼리를 담음 (/about?foo = bar)
- match : 어떤 라우트에 매칭 되었느지에 대한 정보가 있음 (/:name)
- 기타 기술
    - Switch : 매칭된 첫번째 라우트만 보여줌
    
3. 쿼리 파싱하기

```javascript
import React from 'react';
import quertString from 'querystring';

const About = ({location,match}) => {
    const query = quertString.parse(location.search);
    console.log(query);
    return (
        <div>
            <h2>About {match.params.name}</h2>
        </div>
    );
};

export default About;

```

- 라우트 이동하기 
    - Link 컴포넌트를 사용
   
    ```javascript
    import React from 'react';
    import {Link} from 'react-router-dom';
    
    const Menu = () => {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about/foo">About foo</Link></li>
                </ul>
            </div>
        );
    };
    
    export default Menu;
    ```
    
    - NavLink 컴포넌트 : URL이 활성화 되면 특정 스타일 혹은 클래스를 지정가능 
        - 스타일 지정 activeStyle
        - 클래스 지정 activeClassName
        
    ```javascript
    import React from 'react';
    import {NavLink} from 'react-router-dom';
    
    const Menu = () => {
        const activateStyle = {
            color : 'green',
            fontSize : '2rem'
        };
    
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/" activeStyle={activateStyle}>Home</NavLink></li>
                    <li><NavLink exact to="/about" activeStyle={activateStyle}>About</NavLink></li>
                    <li><NavLink to="/about/foo" activeStyle={activateStyle}>About foo</NavLink></li>
                </ul>
            </div>
        );
    };
    
    export default Menu;
```

4. 중첩 라우트



    