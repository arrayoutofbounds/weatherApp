var React = require('react');

// only for non state components where only render is defined
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">
                About
            </h1>
            <p>
                This is a weather app built on react.
            </p>
                Some of the tools used are:
                <ul>
                    <li>
                        <a target="_blank" href="https://facebook.github.io/react">React</a>
                    </li>
                    <li>
                        <a target="_blank" href="http://openweathermap.org">Open weather map api
                        </a>
                    </li>
                </ul>
        </div>
    )
}

module.exports = About;
