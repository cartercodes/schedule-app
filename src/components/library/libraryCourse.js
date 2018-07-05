import React, { Component } from 'react';

import Icon from "../icon";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {Icon ("fas fa-check", "library-course__icon") }
                {/*aarow component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet arcu urna, lobortis congue diam consectetur nec. Duis sit amet eleifend nulla.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;