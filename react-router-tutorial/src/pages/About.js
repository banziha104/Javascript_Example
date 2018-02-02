import React from 'react';
import quertString from 'querystring';

const About = ({location,match}) => {
    const query = quertString.parse(location.search);
    const detail = query.detail === 'true';
    const {age} = query;
    console.log(age);
    console.log(query);
    return (
        <div>
            <h2>About {match.params.name}
                {detail && 'detail: blahblah'}</h2>
            <h4>{age}</h4>
        </div>
    );
};

export default About;
